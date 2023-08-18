;(function () {
  const modifyPopUp = document.querySelector('.modifyTeacher')
  var deletePopUp = document.querySelector('.deleteTeacher')
  const addNewTeacherBtn = document.querySelector('#addTeacher')
  const addNewTeacherForm = document.querySelector('.addNewTeacher')
  const addNewTeacherCancelBtn = document.querySelector(
    '.addNewTeacher-form__btn-cancel'
  )
  const addNewTeacherContainer = document.querySelector(
    '.addNewTeacher__container'
  )

  const deleteTeacherBtn = document.querySelectorAll('.deleteTeacherBtn')
  const deleteTeacherModal = document.querySelector('.deleteTeacher')
  const deleteTeacherModalCancelBtn = document.querySelector(
    '.deleteModal__btn--cancel'
  )
  const deleteTeacherContainer = document.querySelector('.deleteModal__content')
  const modifyBtn = document.querySelectorAll('.manageTeachers__btn--modify')
  const modifyTeacherCancelBtn = document.querySelector('#close')
  const modifyTeacherForm = document.querySelector('.editTeacher')

  //event listeners

  addNewTeacherBtn.addEventListener('click', function () {
    addNewTeacherForm.classList.add('addNewTeacher-show')
    addNewTeacherForm.classList.remove('addNewTeacher-hide')
    addNewTeacherContainer.classList.add('addNewTeacher-animate')
  })

  addNewTeacherCancelBtn.addEventListener('click', function () {
    addNewTeacherForm.classList.remove('addNewTeacher-show')
    addNewTeacherForm.classList.add('addNewTeacher-hide')
    addNewTeacherContainer.classList.remove('addNewTeacher-animate')
  })

  deleteTeacherBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      deleteTeacherModal.classList.add('modalShown')
      deleteTeacherModal.classList.toggle('modalHide')
      deleteTeacherContainer.classList.add('shaking')
    })
  })

  deleteTeacherModalCancelBtn.addEventListener('click', () => {
    deleteTeacherModal.classList.remove('modalShown')
    deleteTeacherModal.classList.toggle('modalHide')
    deleteTeacherContainer.classList.remove('shaking')
  })

  modifyBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modifyPopUp.classList.add('editTeacher-show')
      modifyPopUp.classList.toggle('editTeacher-hide')
      modifyTeacherForm.classList.add('editTeacher-animate')
      console.log(modifyTeacherForm.classList)
    })
  })

  modifyTeacherCancelBtn.addEventListener('click', () => {
    modifyPopUp.classList.remove('editTeacher-show')
    modifyPopUp.classList.toggle('editTeacher-hide')
    modifyTeacherForm.classList.remove('editTeacher-animate')
  })
})()
