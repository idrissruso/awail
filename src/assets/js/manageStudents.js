;(function () {
  const baseUrl = window.API_URLS.apiUrl
  const viewStudentModal = document.querySelector('.viewStudent')

  const viewStudentModalContainer = document.querySelector(
    '.viewStudent__container'
  )
  const table = document.querySelector('#table-body')
  const getStudentsUrl = `${baseUrl}getStudents`
  let students = []
  const searchInput = document.querySelector('#student')
  const studentInfo = document.querySelector('.viewStudent__container-content')
  const spinner = document.querySelector('#spinner')
  const spin2 = document.querySelector('#spinner2')

  //editStudent__container--show

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('manageStudents__btn--eye')) {
      spinner.style.display = 'flex'
      viewStudentModal.classList.add('viewStudent-show')
      viewStudentModal.classList.toggle('viewStudent-hide')
      viewStudentModalContainer.classList.add('viewStudent-animate')
      showStudent(e.target.dataset.student)
    }
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
        spinner.style.display = 'none'
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
            <span class="payment-btn" data-student=${student._id}>Details</span>
          </td>
          <td class="manageStudents__cell">
            <svg class="manageStudents__btn--modify" data-student=${
              student._id
            }>
              <use xlink:href="#icon-edit"></use>
            </svg>
            <svg class="manageStudents__btn--remove" data-student=${
              student._id
            }>
              <use xlink:href="#icon-bin2" class="bin" data-student=${
                student._id
              }></use>
            </svg>
            <svg class="manageStudents__btn--attendees" data-student=${
              student._id
            }>
              <use xlink:href="#icon-calendar-check-o"></use>
            </svg>
          </td>
        </tr>`
      table.insertAdjacentHTML('beforeend', row)
    })
  }

  getStudents()
  const showStudent = async (id) => {
    const response = await fetch(`${baseUrl}getStudent/${id}`)
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
              <th>Examen 4</th>
              <th>Examen 5</th>
              <th>Examen 6</th>
              <th>Examen 7</th>
              <th>Examen 8</th>
              <th>Examen 9</th>
              <th>Examen 10</th>
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
              <td>87</td>
              <td>90</td>
              <td>85</td>
              <td>92</td>
              <td>89</td>
              <td>87</td>
              <td>89.6</td>
              <td>Excellent</td>
            </tr>
            
            <!-- Add more rows for other subjects and exam results -->
          </tbody>
        </table>
      </div>
    </div>
  </div>`
        studentInfo.innerHTML = ''
        studentInfo.innerHTML = html
        spinner.style.display = 'none'
      })
      .catch((err) => console.log(err))
  }
})()
