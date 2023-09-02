'use strict'
;(function () {
  const baseUrl = window.API_URLS.apiUrl

  const apiUrls = {
    getClasses: `${baseUrl}getClasses/`,
    addStudent: `${baseUrl}createStudent/`,
    addUser: `${baseUrl}createUser/`,
  }

  const addButton = document.querySelector('.addStudent-form__btn')
  const imageFileInput = document.querySelector('#image')
  const spinner = document.querySelector('#spinner2')
  let profileImage = null

  imageFileInput.addEventListener('change', (e) => {
    profileImage = e.target.files[0]
  })

  const getClasses = async () => {
    try {
      const response = await fetch(apiUrls.getClasses, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        console.log('Not successful')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const populateClasses = async (classes) => {
    const classesSelect = document.querySelector('#student-class')
    classesSelect.innerHTML = ''

    classes.forEach((classe) => {
      const option = document.createElement('option')
      option.value = classe._id
      option.textContent = classe.class_name
      classesSelect.appendChild(option)
    })
  }

  getClasses().then((classes) => {
    populateClasses(classes)
  })

  addButton.addEventListener('click', async (event) => {
    event.preventDefault()
    spinner.classList.remove('spinner2__hide')

    const matricule = document.querySelector('#student-no').value
    const fullName = document.querySelector('#student-name').value
    const phone = document.querySelector('#student-phone').value
    const email = document.querySelector('#student-email').value
    const dateOfBirth = document.querySelector('#student-age').value
    const gender = document.querySelector('#student-sex').value
    const selectedClass = document.querySelector('#student-class').value
    const parentName = document.querySelector('#parent-name').value
    const parentProfession = document.querySelector('#parent-profession').value
    const parentTel = document.querySelector('#parent-tel').value
    const parentEmail = document.querySelector('#parent-email').value
    const address = document.querySelector('#adress').value
    const form = document.querySelector('.addStudent-form')

    const formData = {
      serial_number: matricule,
      fullName: fullName,
      contact_info: {
        email: email,
        phone: phone,
        address: address,
      },
      gender: gender,
      dateOfBirth: dateOfBirth,
      parent: {
        fullName: parentName,
        contact_info: {
          email: parentEmail,
          phone: parentTel,
        },
        profession: parentProfession,
      },
      class: selectedClass,
      profileImage: profileImage
        ? await codeImageToBase64(profileImage)
        : undefined,
      profileImageType: profileImage ? profileImage.type : undefined,
    }

    try {
      const response = await fetch(apiUrls.addStudent, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Successful')
        console.log(
          response.json().then(async (data) => {
            const userData = {
              username: 'aa',
              password: matricule,
              role: 'Parent',
              roleData: data._id,
              profileImage: profileImage
                ? await codeImageToBase64(profileImage)
                : undefined,
              profileImageType: profileImage ? profileImage.type : undefined,
            }
            try {
              const response = await fetch(apiUrls.addUser, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
              })

              if (response.ok) {
                spinner.classList.add('spinner2__hide')
                alert('Student added successfully!')
                form.reset()
              } else {
                console.log(response.message)
                console.log('Not successful')
                alert(
                  'Une erreur est survenue, veuillez réessayer de remplir tous les champs correctement'
                )
              }
            } catch (error) {
              console.error('Error:', error)
            }
          })
        )
      } else {
        console.log('Not successful')
        alert(
          'Une erreur est survenue, veuillez réessayer de remplir tous les champs correctement'
        )
      }
    } catch (error) {
      console.error('Error:', error)
    }
  })

  const codeImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        const base64EncodedData = reader.result.split(',')[1]
        resolve(base64EncodedData)
      }

      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(file)
    })
  }
})()
