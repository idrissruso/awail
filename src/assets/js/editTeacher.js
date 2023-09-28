;(function () {
  const deleteTeacherLang = () => {
    window.switchLang('deleteTeacherTitle')
    window.switchLang('deleteTeacherMessage')
    window.switchLang('cancelDeleteTeacherBtn')
    window.switchLang('confirmDeleteTeacherBtn')
  }
  const modLang = () => {
    window.switchLang('editTeacherHeading')
    window.switchLang('editImgBtn')
    window.switchLang('editTeacherInfoHeading')
    window.switchLang('qualificationLabel')
    window.switchLang('sexLabel')
    window.switchLang('modifyTeacherOpHomme')
    window.switchLang('modifyTeacherOFfemme')
    window.switchLang('editTeacherBtn')
    window.switchLang('close')
  }
  const baseUrl = window.API_URLS.apiUrl

  const tBody = document.querySelector('#teachers__tBody')
  const modifyPopUp = document.querySelector('.modifyTeacher')
  const modifyTeacherCancelBtn = document.querySelector('#close')
  const modifyTeacherForm = document.querySelector('.editTeacher')
  const form = document.querySelector('#editForm')
  const deleteTeacherPopUp = document.querySelector('.deleteTeacher')
  const deleteTeacherBtn = document.querySelector('.deleteModal__btn--confirm')
  const deleteTeacherModal = document.querySelector('.deleteTeacher')
  const deleteTeacherModalCancelBtn = document.querySelector(
    '.deleteModal__btn--cancel'
  )
  const deleteTeacherContainer = document.querySelector('.deleteModal__content')
  const getTeacherUrl = `${baseUrl}getTeacher`
  const updateTeacherUrl = `${baseUrl}updateTeacher`
  const deleteTeacherUrl = `${baseUrl}deleteTeacher`
  const deleteUserByRoleData = `${baseUrl}deleteUserByRoleData`
  const profilImg = document.querySelector('.form__box-img--img')
  const imgInput = document.querySelector('#profileImg')
  const imgLabel = document.querySelector('.form__box-img--caption')
  const spin = document.querySelector('#spinner2')
  let imgFile

  imgLabel.addEventListener('click', () => {
    imgInput.click()
  })

  imgInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      profilImg.src = reader.result
    }
    imgFile = file
  })

  const deleteTeacher = async (id) => {
    try {
      const res = await fetch(`${deleteTeacherUrl}/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        const response = await fetch(`${deleteUserByRoleData}/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          alert('teacher deleted successfully')
          window.location.reload()
        }
      } else {
        alert('une erreur est survenue')
      }
    } catch (err) {
      alert('une erreur est survenue' + err)
      console.error(err)
    }
  }

  deleteTeacherBtn.addEventListener('click', () => {
    deleteTeacher(teacherId)
  })

  const codeImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.result.startsWith('data:image/')) {
          const base64EncodedData = reader.result.split(',')[1]
          resolve(base64EncodedData)
        } else {
          reject(new Error('Invalid data URL format'))
        }
      }

      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(file)
    })
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    spin.classList.remove('spinner2__hide')

    var teacherData = {
      fullName: form.nomComplet.value,
      serial_number: form.matricule.value,
      contact_info: {
        email: form.email.value,
        phone: form.telephone.value,
        address: form.address.value,
      },
      dateOfBirth: form.dateNaissance.value,
      qualification: form.qualification.value,
      profileImage: imgInput.files[0]
        ? await codeImageToBase64(imgInput.files[0])
        : undefined,
      profilImgType: imgInput.files[0] ? imgInput.files[0].type : undefined,
    }

    try {
      const response = await fetch(`${updateTeacherUrl}/${teacherId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherData),
      })

      if (response.ok) {
        spin.classList.add('spinner2__hide')
        alert('teacher updated successfully')
        window.location.reload()
      } else {
        alert('une erreur est survenue')
        const error = await response.json().then((data) => {
          console.log(data)
        })
      }
    } catch (err) {
      alert('une erreur est survenue' + err)
      console.error(err)
    }
  })
  // Event listeners

  deleteTeacherModalCancelBtn.addEventListener('click', () => {
    deleteTeacherModal.classList.remove('modalShown')
    deleteTeacherModal.classList.toggle('modalHide')
    deleteTeacherContainer.classList.remove('shaking')
  })

  tBody.addEventListener('click', async (e) => {
    let target = e.target
    if (target.tagName === 'use') {
      target = target.parentNode
    }
    if (
      target.classList.contains('manageTeachers__btn--remove') ||
      target.classList.contains('bin')
    ) {
      deleteTeacherLang()
      deleteTeacherPopUp.classList.add('modalShown')
      deleteTeacherPopUp.classList.toggle('modalHide')
      deleteTeacherContainer.classList.add('shaking')
      teacherId = target.dataset.teacher
    }
    if (target.classList.contains('manageTeachers__btn--modify')) {
      spin.classList.remove('spinner2__hide')
      modifyPopUp.classList.add('editTeacher-show')
      modifyPopUp.classList.toggle('editTeacher-hide')
      modifyTeacherForm.classList.add('editTeacher-animate')
      teacherId = target.dataset.teacher

      try {
        const teacher = await getTeacher(target.dataset.teacher)
      } catch (err) {
        alert('une erreur est survenue' + err)
      }
    }
  })
  modifyTeacherCancelBtn.addEventListener('click', () => {
    modifyPopUp.classList.remove('editTeacher-show')
    modifyPopUp.classList.toggle('editTeacher-hide')
    modifyTeacherForm.classList.remove('editTeacher-animate')
  })

  function displayImg(teacher) {
    return teacher.profileImage
      ? `data:${teacher.profileImageType};charset=utf-8;base64,${teacher.profileImage}`
      : 'profile.png'
  }

  const getTeacher = async (id) => {
    try {
      const res = await fetch(`${getTeacherUrl}/${id}`)
      const data = await res.json()
      if (res.ok) {
        const teacher = data
        form.nomComplet.value = teacher.fullName
        form.email.value = teacher.contact_info.email
        form.telephone.value = teacher.contact_info.phone
        form.dateNaissance.value = deFormateDate(teacher.dateOfBirth)
        form.matricule.value = teacher.serial_number
        profilImg.src = displayImg(teacher)
        form.qualification.value = teacher.qualification
        form.address.value = teacher.contact_info.address
      }
    } catch (err) {
      alert('une erreur est survenue' + err + 'form second')
      console.error(err)
    } finally {
      spin.classList.add('spinner2__hide')
      modLang()
    }
  }

  const deFormateDate = (date) => {
    const date_ = new Date(date)
    const year = date_.getFullYear()
    const month = (date_.getMonth() + 1).toString().padStart(2, '0')
    const day = date_.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  }
})()
