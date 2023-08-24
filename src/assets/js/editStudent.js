;(function () {
  let modifyPopUp = document.querySelector('.modifyStudent')
  const inputs = document.querySelectorAll('.form__box-info--input')
  const imgInput = document.querySelector('.form__box-img--file')
  const matriculeInput = document.querySelector('#matricule')
  const nomCompletInput = document.querySelector('#nomComplet')
  const telephoneInput = document.querySelector('#telephone')
  const dateNaissanceInput = document.querySelector('#dateNaissance')
  const sexInput = document.querySelector('#sex')
  const classeInput = document.querySelector('#classe')
  const parentNameInput = document.querySelector('#parentName')
  const parentProfessionInput = document.querySelector('#parentProfession')
  const parentPhoneInput = document.querySelector('#parentPhone')
  const parentEmailInput = document.querySelector('#parentEmail')
  const parentAddressInput = document.querySelector('#parentAddress')
  const editImgBtn = document.querySelector('#editImageBtn')
  const img = document.querySelector('.form__box-img--img')

  const closeBtn = document.querySelector('.close')
  const form_container = document.querySelector('.editStudent__container')
  const table = document.querySelector('#table-body')
  const form = document.querySelector('#modifyForm')
  let student
  let profileImg

  table.addEventListener('click', async (e) => {
    if (e.target.classList.contains('manageStudents__btn--modify')) {
      modifyPopUp.classList.add('shown')
      modifyPopUp.classList.toggle('hidden')
      form_container.classList.add('editStudent__container--show')
      student = await getStudent(e.target.dataset.student)
      matriculeInput.value = student.serial_number
      nomCompletInput.value = student.fullName
      telephoneInput.value = student.contact_info.phone
      dateNaissanceInput.value = student.dateOfBirth
      sexInput.value = student.gender.gender
      classeInput.value = student.class
      parentNameInput.value = student.parent.fullName
      parentProfessionInput.value = student.parent.profession
      parentPhoneInput.value = student.parent.contact_info.phone
      parentEmailInput.value = student.parent.contact_info.email
      parentAddressInput.value = student.contact_info.address
      if (student.profileImage) {
        img.src = `data:${student.profileImageType};base64,${student.profileImage}`
      } else {
        img.src = `profile.png`
      }
    }
  })

  const formatDate = (date) => {
    const d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  closeBtn.addEventListener('click', () => {
    modifyPopUp.classList.remove('shown')
    modifyPopUp.classList.toggle('hidden')
    form_container.classList.remove('editStudent__container--show')
  })
  modifyPopUp.addEventListener('click', (e) => {
    if (e.target === modifyPopUp) {
      modifyPopUp.classList.remove('shown')
      modifyPopUp.classList.toggle('hidden')
      form_container.classList.remove('editStudent__container--show')
    }
  })

  editImgBtn.addEventListener('click', () => {
    imgInput.click()
  })

  const getStudent = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/getStudent/${id}`)
      const data = await res.json() // Await the JSON parsing
      return data
    } catch (err) {
      console.log(err)
    }
  }
  // Call the function with the desired student ID

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

  imgInput.addEventListener('change', () => {
    const file = imgInput.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      const dataURL = reader.result
      const img = document.querySelector('.form__box-img--img')
      img.src = dataURL
    }
    profileImg = file
    reader.readAsDataURL(file)
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = {
      serial_number: matriculeInput.value,
      fullName: nomCompletInput.value,
      contact_info: {
        email: parentEmailInput.value,
        phone: telephoneInput.value,
        address: parentAddressInput.value,
      },
      gender: sexInput.value,
      dateOfBirth: dateNaissanceInput.value,
      parent: {
        fullName: parentNameInput.value,
        contact_info: {
          email: parentEmailInput.value,
          phone: parentPhoneInput.value,
        },
        profession: parentProfessionInput.value,
      },
      class: classeInput.value,
      profileImage: profileImg
        ? await codeImageToBase64(profileImg)
        : undefined,
      profileImageType: profileImg ? profileImg.type : undefined,
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/updateStudent/${student._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      const data = await response.json()
      alert("L'élève a été modifié avec succès")
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  })

  // Now you can use these variables to manipulate the selected elements
})()

//