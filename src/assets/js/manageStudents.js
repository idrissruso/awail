;(function () {
  if (typeof modifyPopUp !== 'undefined') delete modifyPopUp

  var modifyPopUp = document.querySelector('.modifyStudent')
  const deletePopUp = document.querySelector('.deleteStudent')
  const attendeesPopUp = document.querySelector('.attendees')
  const coursesPopUp = document.querySelector('.courses')
  const modifyBtn = document.querySelectorAll('.manageStudents__btn--modify')
  const deleteBtn = document.querySelector('.manageStudents__btn--delete')
  const attendeesBtn = document.querySelector('.manageStudents__btn--attendees')
  const coursesBtn = document.querySelector('.manageStudents__btn--courses')
  const closeBtn = document.querySelector('.close')
  const form_container = document.querySelector('.editStudent__container')

  //editStudent__container--show

  modifyBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modifyPopUp.classList.add('shown')
      modifyPopUp.classList.toggle('hidden')
      form_container.classList.add('editStudent__container--show')
    })
  })

  closeBtn.addEventListener('click', () => {
    modifyPopUp.classList.remove('shown')
    modifyPopUp.classList.toggle('hidden')
    form_container.classList.remove('editStudent__container--show')
  })
  modifyPopUp.addEventListener('click', (e) => {
    if (e.target === modifyPopUp) {
      modifyPopUp.classList.remove('shown')
      modifyPopUp.classList.toggle('hidden')
    }
  })
})()
