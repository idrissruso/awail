;(function () {
  if (typeof modifyPopUp !== 'undefined') delete modifyPopUp
  if (typeof deletePopUp !== 'undefined') delete deletePopUp

  var modifyPopUp = document.querySelector('.modifyStudent')
  var deletePopUp = document.querySelector('.deleteStudent')
  const attendeesPopUp = document.querySelector('.absenteeism')
  const coursesPopUp = document.querySelector('.courses')
  const modifyBtn = document.querySelectorAll('.manageStudents__btn--modify')
  const deleteBtn = document.querySelectorAll('.manageStudents__btn--remove')
  const attendeesBtn = document.querySelectorAll(
    '.manageStudents__btn--attendees'
  )
  const absenteeismCancel = document.querySelector(
    '.add-attendance__cancel-button'
  )

  const absenteeismModal = document.querySelector('.absenteeism__modal')
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
  const paymentBtn = document.querySelectorAll('.payment-btn')
  const paymentModal = document.querySelector('.payment')
  const paymentCancelBtn = document.querySelector('.payment__close-btn')
  const paymentModalContent = document.querySelector('.payment__container')
  const viewStudentBtn = document.querySelectorAll('.manageStudents__btn--eye')

  const viewStudentModalCloseBtn = document.querySelector(
    '.viewStudent__close-btn'
  )
  console.log(viewStudentModalCloseBtn + 'close')

  const viewStudentModal = document.querySelector('.viewStudent')
  console.log(viewStudentModal + 'view')
  const viewStudentModalContainer = document.querySelector(
    '.viewStudent__container'
  )

  console.log(viewStudentModalContainer + 'viewContainer')
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
      form_container.classList.remove('editStudent__container--show')
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

  attendeesBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      attendeesPopUp.classList.add('absenteeismShown')
      attendeesPopUp.classList.toggle('absenteeismHide')
      absenteeismModal.classList.add('absenteeism__container--show')
    })
  })

  absenteeismCancel.addEventListener('click', () => {
    attendeesPopUp.classList.remove('absenteeismShown')
    attendeesPopUp.classList.toggle('absenteeismHide')
    absenteeismModal.classList.remove('absenteeism__container--show')
  })

  attendeesPopUp.addEventListener('click', (e) => {
    if (e.target === attendeesPopUp) {
      attendeesPopUp.classList.remove('absenteeismShown')
      attendeesPopUp.classList.toggle('absenteeismHide')
      absenteeismModal.classList.remove('absenteeism__container--show')
    }
  })

  paymentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      paymentModal.classList.add('paymentShown')
      paymentModal.classList.toggle('paymentHidden')
      paymentModalContent.classList.add('payment__container--show')
    })
  })

  paymentCancelBtn.addEventListener('click', () => {
    paymentModal.classList.remove('paymentShown')
    paymentModal.classList.toggle('paymentHidden')
    paymentModalContent.classList.remove('payment__container--show')
  })

  viewStudentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      viewStudentModal.classList.add('viewStudent-show')
      viewStudentModal.classList.toggle('viewStudent-hide')
      viewStudentModalContainer.classList.add('viewStudent-animate')
    })
  })

  viewStudentModalCloseBtn.addEventListener('click', () => {
    viewStudentModal.classList.remove('viewStudent-show')
    viewStudentModal.classList.toggle('viewStudent-hide')
    viewStudentModalContainer.classList.remove('viewStudent-animate')
  })
})()
