;(function () {
  const addButton = document.querySelector('.addStudent-form__btn')
  const imageFileInput = document.querySelector('#image')
  let profileImage = null

  imageFileInput.addEventListener('change', (e) => {
    profileImage = e.target.files[0]
  })

  addButton.addEventListener('click', async (event) => {
    event.preventDefault()

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

    const addStudentUrl = 'http://localhost:3000/api/createStudent'
    const addUserUrl = 'http://localhost:3000/api/createUser'

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
      const response = await fetch(addStudentUrl, {
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
              const response = await fetch(addUserUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
              })

              if (response.ok) {
                alert('Student added successfully!')
                location.reload()
              } else {
                console.log(response.message)
                console.log('Not successful')
                alert('Error adding student')
              }
            } catch (error) {
              console.error('Error:', error)
            }
          })
        )
      } else {
        console.log('Not successful')
        alert('Error adding student')
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
