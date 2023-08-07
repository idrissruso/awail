;(function () {
  if (typeof modifyPopUp !== 'undefined') delete modifyPopUp
  if (typeof deletePopUp !== 'undefined') delete deletePopUp

  var modifyPopUp = document.querySelector('.modifyStudent')
  var deletePopUp = document.querySelector('.deleteStudent')
  const attendeesPopUp = document.querySelector('.attendees')
  const coursesPopUp = document.querySelector('.courses')
  const modifyBtn = document.querySelectorAll('.manageStudents__btn--modify')
  const deleteBtn = document.querySelectorAll('.manageStudents__btn--remove')
  const attendeesBtn = document.querySelector('.manageStudents__btn--attendees')
  const coursesBtn = document.querySelector('.manageStudents__btn--courses')
  const closeBtn = document.querySelector('.close')
  const form_container = document.querySelector('.editStudent__container')
  const deleteModalCancelBtn = document.querySelector(
    '.deleteModal__btn--cancel'
  )
  const deleteMOdalConfirmBtn = document.querySelector(
    '.deleteModal__btn--confirm'
  )

  const modalContent = document.querySelector('.deleteModal__content')

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
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      deletePopUp.classList.add('modalShown')
      deletePopUp.classList.toggle('modalHide')
      modalContent.classList.add('shaking')
    })
  })

  modalContent.addEventListener('animationend', () => {
    modalContent.classList.remove('shaking')
  })

  deleteModalCancelBtn.addEventListener('click', () => {
    deletePopUp.classList.remove('modalShown')
    deletePopUp.classList.toggle('modalHide')
  })

  deletePopUp.addEventListener('click', (e) => {
    if (e.target === deletePopUp) {
      deletePopUp.classList.remove('modalShown')
      deletePopUp.classList.toggle('modalHide')
    }
  })

  deleteMOdalConfirmBtn.addEventListener('click', () => {
    deletePopUp.classList.remove('modalShown')
    deletePopUp.classList.toggle('modalHide')
  })
})()
