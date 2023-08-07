;(function () {
  if (typeof modifyPopUp !== 'undefined') delete modifyPopUp

  var modifyPopUp = document.querySelector('.modifyStudent')
  var deletePopUp = document.querySelector('.deleteStudent')
  var attendeesPopUp = document.querySelector('.attendees')
  var coursesPopUp = document.querySelector('.courses')
  var modifyBtn = document.querySelectorAll('.manageStudents__btn--modify')
  var deleteBtn = document.querySelector('.manageStudents__btn--delete')
  var attendeesBtn = document.querySelector('.manageStudents__btn--attendees')
  var coursesBtn = document.querySelector('.manageStudents__btn--courses')
  var closeBtn = document.querySelector('.close')

  modifyBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modifyPopUp.classList.add('shown')
      modifyPopUp.classList.toggle('hidden')
      console.log('modify')
    })
  })

  closeBtn.addEventListener('click', () => {
    modifyPopUp.classList.remove('shown')
    modifyPopUp.classList.toggle('hidden')
  })
})()
