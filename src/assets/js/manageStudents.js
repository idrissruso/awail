;(function () {
  let modifyPopUp = document.querySelector('.modifyStudent')
  let deletePopUp = document.querySelector('.deleteStudent')
  const attendeesPopUp = document.querySelector('.absenteeism')
  const coursesPopUp = document.querySelector('.courses')
  const modifyBtn = document.querySelector('.manageStudents__btn--modify')

  const attendeesBtn = document.querySelector('.manageStudents__btn--attendees')
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

  const viewStudentModal = document.querySelector('.viewStudent')

  const viewStudentModalContainer = document.querySelector(
    '.viewStudent__container'
  )
  const table = document.querySelector('.manageStudents__table')
  const getStudentsUrl = 'http://localhost:3000/api/getStudents'
  let students = []
  const bin = document.querySelector('table .manageStudents__cell .bin')
  console.log(bin)

  //editStudent__container--show

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('manageStudents__btn--eye')) {
      viewStudentModal.classList.add('viewStudent-show')
      viewStudentModal.classList.toggle('viewStudent-hide')
      viewStudentModalContainer.classList.add('viewStudent-animate')
    }
  })

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('manageStudents__btn--modify')) {
      modifyPopUp.classList.add('shown')
      modifyPopUp.classList.toggle('hidden')
      form_container.classList.add('editStudent__container--show')
    }
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

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('manageStudents__btn--attendees')) {
      attendeesPopUp.classList.add('absenteeismShown')
      attendeesPopUp.classList.toggle('absenteeismHide')
      absenteeismModal.classList.add('absenteeism__container--show')
    }
  })

  absenteeismCancel.addEventListener('click', () => {
    attendeesPopUp.classList.remove('absenteeismShown')
    attendeesPopUp.classList.toggle('absenteeismHide')
    absenteeismModal.classList.remove('absenteeism__container--show')
  })

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('payment-btn')) {
      paymentModal.classList.add('paymentShown')
      paymentModal.classList.toggle('paymentHidden')
      paymentModalContent.classList.add('payment__container--show')
    }
  })

  paymentCancelBtn.addEventListener('click', () => {
    paymentModal.classList.remove('paymentShown')
    paymentModal.classList.toggle('paymentHidden')
    paymentModalContent.classList.remove('payment__container--show')
  })

  viewStudentModalCloseBtn.addEventListener('click', () => {
    viewStudentModal.classList.remove('viewStudent-show')
    viewStudentModal.classList.toggle('viewStudent-hide')
    viewStudentModalContainer.classList.remove('viewStudent-animate')
  })

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  const getStudents = async () => {
    const response = await fetch(getStudentsUrl)
      .then((res) => res.json())
      .then((data) => {
        students.push(...data)
        students.map((student) => {
          table.insertAdjacentHTML(
            'beforeend',
            `<tr class="manageStudents__row manageStudents__row-content">
          <td class="manageStudents__cell">
            <svg class="manageStudents__btn--eye">
              <use xlink:href="#icon-eye"></use>
            </svg>
          </td>
          <td class="manageStudents__cell">
            <img src="author.JPG" alt="Élève 1" class="manageStudents__img" />
          </td>
          <td class="manageStudents__cell">${student.serial_number}</td>
          <td class="manageStudents__cell">${student.fullName}</td>
          <td class="manageStudents__cell">${formatDate(
            student.dateOfBirth
          )}</td>
          <td class="manageStudents__cell">${student.contact_info.phone}</td>
          <td class="manageStudents__cell">${student.parent.fullName}</td>
          <td class="manageStudents__cell">${
            student.parent.contact_info.phone
          }</td>
          <td class="manageStudents__cell">${student.contact_info.address}</td>
          <td class="manageStudents__cell">
            <span class="payment-btn">Details</span>
          </td>
          <td class="manageStudents__cell">
            <svg class="manageStudents__btn--modify">
              <use xlink:href="#icon-edit"></use>
            </svg>
            <svg class="manageStudents__btn--remove">
              <use xlink:href="#icon-bin2" class="bin"></use>
            </svg>
            <svg class="manageStudents__btn--attendees">
              <use xlink:href="#icon-calendar-check-o"></use>
            </svg>
          </td>
        </tr>`
          )
        })
        const deleteBtn = document.querySelectorAll(
          '.manageStudents__btn--remove'
        )
        deleteBtn.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            deletePopUp.classList.add('modalShown')
            deletePopUp.classList.toggle('modalHide')
            modalContent.classList.add('shaking')
          })
        })
      })
      .catch((err) => console.log(err))
  }
  getStudents()
})()
