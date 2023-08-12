;(function () {
  if (typeof modifyPopUp !== 'undefined') delete modifyPopUp
  if (typeof deletePopUp !== 'undefined') delete deletePopUp

  var modifyPopUp = document.querySelector('.modifyTeacher')
  var deletePopUp = document.querySelector('.deleteTeacher')
  const addNewTeacherBtn = document.querySelector('#addTeacher')
  const addNewTeacherForm = document.querySelector('.addNewTeacher')
  const addNewTeacherCancelBtn = document.querySelector(
    '.addNewTeacher-form__btn-cancel'
  )
  const addNewTeacherContainer = document.querySelector(
    '.addNewTeacher__container'
  )

  addNewTeacherBtn.addEventListener('click', function () {
    addNewTeacherForm.classList.add('addNewTeacher-show')
    addNewTeacherForm.classList.remove('addNewTeacher-hide')
    addNewTeacherContainer.classList.add('addNewTeacher-animate')
    console.log(addNewTeacherContainer.classList)
  })

  addNewTeacherCancelBtn.addEventListener('click', function () {
    addNewTeacherForm.classList.remove('addNewTeacher-show')
    addNewTeacherForm.classList.add('addNewTeacher-hide')
    addNewTeacherContainer.classList.remove('addNewTeacher-animate')
    console.log(addNewTeacherContainer.classList)
  })
})()
