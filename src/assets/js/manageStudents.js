;(function () {
  let modifyPopUp = document.querySelector('.modifyStudent')
  let deletePopUp = document.querySelector('.deleteStudent')
  const attendeesPopUp = document.querySelector('.absenteeism')
  const absenteeismCancel = document.querySelector(
    '.add-attendance__cancel-button'
  )
  const absenteeismModal = document.querySelector('.absenteeism__modal')
  const closeBtn = document.querySelector('.close')
  const form_container = document.querySelector('.editStudent__container')
  const deleteModalCancelBtn = document.querySelector(
    '.deleteModal__btn--cancel'
  )
  const deleteMOdalConfirmBtn = document.querySelector(
    '.deleteModal__btn--confirm'
  )
  const modalContent = document.querySelector('.deleteModal__content')
  const paymentModal = document.querySelector('.payment')
  const paymentCancelBtn = document.querySelector('.payment__close-btn')
  const paymentModalContent = document.querySelector('.payment__container')

  const viewStudentModal = document.querySelector('.viewStudent')

  const viewStudentModalContainer = document.querySelector(
    '.viewStudent__container'
  )
  const table = document.querySelector('#table-body')
  const getStudentsUrl = 'http://localhost:3000/api/getStudents'
  let students = []
  const searchInput = document.querySelector('#student')
  const studentInfo = document.querySelector('.viewStudent__container-content')

  //editStudent__container--show

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('manageStudents__btn--eye')) {
      viewStudentModal.classList.add('viewStudent-show')
      viewStudentModal.classList.toggle('viewStudent-hide')
      viewStudentModalContainer.classList.add('viewStudent-animate')
      showStudent(e.target.dataset.student)
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

  viewStudentModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('viewStudent__close-btn')) {
      viewStudentModal.classList.remove('viewStudent-show')
      viewStudentModal.classList.toggle('viewStudent-hide')
      viewStudentModalContainer.classList.remove('viewStudent-animate')
    }
  })

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  function displayImg(user) {
    if (user.profileImage) {
      return `data:${user.profileImageType};charset=utf-8;base64,${user.profileImage}`
    }
    return 'profile.png'
  }

  const getStudents = async () => {
    const response = await fetch(getStudentsUrl)
      .then((res) => res.json())
      .then((data) => {
        students.push(...data)
        updateTable(students)
      })
      .catch((err) => console.log(err))
  }

  searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase()
    const filteredStudents = students.filter((student) =>
      student.fullName.toLowerCase().includes(searchValue)
    )
    updateTable(filteredStudents)
  })

  const updateTable = (students) => {
    // clear the table
    table.innerHTML = ''
    // add the filtered students to the table
    students.forEach((student) => {
      let row = `<tr class="manageStudents__row manageStudents__row-content">
          <td class="manageStudents__cell">
            <svg class="manageStudents__btn--eye" data-student=${student._id}>
              <use xlink:href="#icon-eye"></use>
            </svg>
          </td>
          <td class="manageStudents__cell">
          <figure>
              <img
                 <img src="${displayImg(
                   student
                 )}" alt="Élève 1" class="manageStudents__img" />
              
            </figure>
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
      const deleteBtn = document.querySelectorAll(
        '.manageStudents__btn--remove'
      )
      table.insertAdjacentHTML('beforeend', row)
      deleteBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePopUp.classList.add('modalShown')
          deletePopUp.classList.toggle('modalHide')
          modalContent.classList.add('shaking')
        })
      })
    })
  }

  getStudents()
  const showStudent = async (id) => {
    const response = await fetch(`http://localhost:3000/api/getStudent/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const student = data
        let html = `<div class="viewStudent__container-content">
    <span class="viewStudent__close-btn">✖️</span>
    <h2 class="viewStudent__title">Détails de l'élève</h2>
    <div class="viewStudent__content">
      <div class="viewStudent__info">
        <figure class="viewStudent__img-box">
          <img src="${displayImg(
            student
          )}" alt="user image" class="viewStudent__img" />
          <figcaption class="viewStudent__img-caption">
            <svg class="viewStudent__btn--modify">
              <use xlink:href="#icon-edit"></use>
            </svg>
            <svg class="viewStudent__btn--remove">
              <use xlink:href="#icon-bin2"></use>
            </svg>
            <svg class="viewStudent__btn--attendees">
              <use xlink:href="#icon-calendar-check-o"></use>
            </svg>
          </figcaption>
        </figure>
        <div class="viewStudent__info-box">
          <div class="viewStudent__row">
            <span class="viewStudent__label">Matricule:</span>
            <span class="viewStudent__value">${student.serial_number}</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Nom Complet:</span>
            <span class="viewStudent__value">${student.fullName}</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Téléphone:</span>
            <span class="viewStudent__value">${
              student.contact_info.phone
            }</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Date de Naissance:</span>
            <span class="viewStudent__value">${formatDate(
              student.dateOfBirth
            )}</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Sexe:</span>
            <span class="viewStudent__value">${student.gender}</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Classe:</span>
            <span class="viewStudent__value">${student.class}</span>
          </div>
          <div class="viewStudent__divider"></div>
          <h3 class="viewStudent__subheading">Information du Parent</h3>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Nom du Parent:</span>
            <span class="viewStudent__value">${student.parent.fullName}</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Profession du Parent:</span>
            <span class="viewStudent__value">${student.parent.profession}</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Téléphone du Parent:</span>
            <span class="viewStudent__value">${
              student.parent.contact_info.phone
            }</span>
          </div>
          <div class="viewStudent__row">
            <span class="viewStudent__label">Adresse du Parent:</span>
            <span class="viewStudent__value">${
              student.contact_info.address
            }</span>
          </div>
        </div>
      </div>
      <div class="viewStudent__exams">
        <h3 class="viewStudent__subheading">Résultats des Examens</h3>
        <table class="viewStudent__table">
          <thead>
            <tr>
              <th>Matière</th>
              <th>Examen 1</th>
              <th>Examen 2</th>
              <th>Examen 3</th>
              <th>Moyenne</th>
              <th>Appréciation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mathématiques</td>
              <td>90</td>
              <td>85</td>
              <td>92</td>
              <td>89</td>
              <td>Excellent</td>
            </tr>
            <tr>
              <td>Sciences</td>
              <td>75</td>
              <td>80</td>
              <td>78</td>
              <td>77.67</td>
              <td>Bien</td>
            </tr>
            <tr>
              <td>Sciences</td>
              <td>75</td>
              <td>80</td>
              <td>78</td>
              <td>77.67</td>
              <td>Bien</td>
            </tr>
            <tr>
              <td>Sciences</td>
              <td>75</td>
              <td>80</td>
              <td>78</td>
              <td>77.67</td>
              <td>Bien</td>
            </tr>
            <!-- Add more rows for other subjects and exam results -->
          </tbody>
        </table>
      </div>
    </div>
  </div>`
        studentInfo.innerHTML = ''
        studentInfo.innerHTML = html
      })
      .catch((err) => console.log(err))
  }
})()
