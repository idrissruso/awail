;(function () {
  const tBody = document.querySelector('#teachers__tBody')
  const modifyPopUp = document.querySelector('.modifyTeacher')
  const modifyTeacherCancelBtn = document.querySelector('#close')
  const modifyTeacherForm = document.querySelector('.editTeacher')
  const form = document.querySelector('#editForm')
  const deleteTeacherPopUp = document.querySelector('.deleteTeacher')
  const deleteTeacherBtn = document.querySelectorAll('.deleteTeacherBtn')
  const deleteTeacherModal = document.querySelector('.deleteTeacher')
  const deleteTeacherModalCancelBtn = document.querySelector(
    '.deleteModal__btn--cancel'
  )
  const deleteTeacherContainer = document.querySelector('.deleteModal__content')
  const getTeachersUrl = 'http://localhost:3000/api/getTeacher'
  const profilImg = document.querySelector('.form__box-img--img')
  const imgInput = document.querySelector('#profileImg')
  const imgLabel = document.querySelector('.form__box-img--caption')

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
  })

  const encodeImage64base = (file) => {
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
      deleteTeacherPopUp.classList.add('modalShown')
      deleteTeacherPopUp.classList.toggle('modalHide')
      deleteTeacherContainer.classList.add('shaking')
      teacherId = target.dataset.teacher
    }
    if (target.classList.contains('manageTeachers__btn--modify')) {
      modifyPopUp.classList.add('editTeacher-show')
      modifyPopUp.classList.toggle('editTeacher-hide')
      modifyTeacherForm.classList.add('editTeacher-animate')

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
      const res = await fetch(`${getTeachersUrl}/${id}`)
      const data = await res.json()
      if (res.ok) {
        const teacher = data
        form.nomComplet.value = teacher.fullName
        form.email.value = teacher.contact_info.email
        form.telephone.value = teacher.contact_info.phone
        form.dateNaissance.value = deFormateDate(teacher.dateOfBirth)
        form.matricule.value = teacher.serial_number
        profilImg.src = displayImg(teacher)
      }
    } catch (err) {
      alert('une erreur est survenue' + err + 'form second')
      console.error(err)
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
