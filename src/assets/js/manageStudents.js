const modifyPopUp = document.querySelector('.modifyStudent')
const deletePopUp = document.querySelector('.deleteStudent')
const attendeesPopUp = document.querySelector('.attendees')
const coursesPopUp = document.querySelector('.courses')
const modifyBtn = document.querySelector('.manageStudents__btn--modify')
const deleteBtn = document.querySelector('.manageStudents__btn--delete')
const attendeesBtn = document.querySelector('.manageStudents__btn--attendees')
const coursesBtn = document.querySelector('.manageStudents__btn--courses')
const closeBtn = document.querySelector('.close')

modifyBtn.addEventListener('click', () => {
  modifyPopUp.classList.add('shown')
  modifyPopUp.classList.toggle('hidden')
})

closeBtn.addEventListener('click', () => {
  modifyPopUp.classList.remove('shown')
  modifyPopUp.classList.toggle('hidden')
})
