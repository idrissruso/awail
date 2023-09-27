;(function () {
  const multiLanguage = () => {
    window.switchLang('manStuTitle')
    window.switchLang('manStudAddStuBtn')
    window.switchLang('manStudSearchLabel')
    window.switchLang('manStudImage')
    window.switchLang('manStudMatricule')
    window.switchLang('manStudName')
    window.switchLang('manStuBrDate')
    window.switchLang('manStudTel')
    window.switchLang('manStudParentName')
    window.switchLang('manStudParentPhone')
    window.switchLang('manStudAdress')
    window.switchLang('manStudPayment')
    window.switchLang('manStudAction')
  }

  const shoStuLang = () => {
    window.switchLang('studentDetailsTitle')
    window.switchLang('subjectHeader')
    window.switchLang('exam1Header')
    window.switchLang('exam2Header')
    window.switchLang('exam3Header')
    window.switchLang('exam4Header')
    window.switchLang('exam5Header')
    window.switchLang('exam6Header')
    window.switchLang('exam7Header')
    window.switchLang('exam8Header')
    window.switchLang('exam9Header')
    window.switchLang('exam10Header')
    window.switchLang('averageHeader')
    window.switchLang('appreciationHeader')
    window.switchLang('parentInfo')
    window.switchLang('RésultatsDesExamens')
    window.switchLang('appreciationHeader')
  }
  //===================multi language=================
  multiLanguage()

  const baseUrl = window.API_URLS.apiUrl
  const apiUrls = {
    getGradesByStudent: `${baseUrl}getStudentGrades/`,
    getCourseById: `${baseUrl}getCourse/`,
    getClassById: `${baseUrl}getClass/`,
  }

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
  let gradesTable
  let rows

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

  const fetchData = async (url, id = '') => {
    try {
      const response = await fetch(`${url}${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return data
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

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

  const getClassNameById = async (id) => {
    const data = await fetchData(apiUrls.getClassById, id)
    return data.class_name
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
      .then(async (data) => {
        const student = data
        const className = await getClassNameById(student.class)
        let html = `<div class="viewStudent__container-content">
  <span class="viewStudent__close-btn">✖️</span>
  <h2 class="viewStudent__title" id="studentDetailsTitle">Détails de l'élève</h2>
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
          <span class="viewStudent__label" id="ViewStudentMatricule">Matricule:</span>
          <span class="viewStudent__value" >${student.serial_number}</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="studentFullName">Nom Complet:</span>
          <span class="viewStudent__value" >${student.fullName}</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="studentPhone">Téléphone:</span>
          <span class="viewStudent__value" >${student.contact_info.phone}</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="studentDateOfBirth">Date de Naissance:</span>
          <span class="viewStudent__value" >${formatDate(
            student.dateOfBirth
          )}</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="studentGender">Gendre:</span>
          <span class="viewStudent__value" >${student.gender}</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="studentClass">Classe:</span>
          <span class="viewStudent__value" >${className}
          </span>
        </div>
        <div class="viewStudent__divider"></div>
        <h3 class="viewStudent__subheading" id="parentInfo">Information du Parent</h3>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="parentFullName">Nom du Parent:</span>
          <span class="viewStudent__value" >${student.parent.fullName}</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="parentProfession">Profession du Parent:</span>
          <span class="viewStudent__value" >${student.parent.profession}</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="parentPhone">Téléphone du Parent:</span>
          <span class="viewStudent__value" >${
            student.parent.contact_info.phone
          }</span>
        </div>
        <div class="viewStudent__row">
          <span class="viewStudent__label" id="parentAddress">Adresse du Parent:</span>
          <span class="viewStudent__value" >${
            student.contact_info.address
          }</span>
        </div>
      </div>
    </div>
    <div class="viewStudent__exams">
      <h3 class="viewStudent__subheading" id="RésultatsDesExamens">Résultats des Examens</h3>
      <table class="viewStudent__table">
        <thead>
          <tr>
            <th id="subjectHeader">Matière</th>
            <th id="exam1Header">Examen 1</th>
            <th id="exam2Header">Examen 2</th>
            <th id="exam3Header">Examen 3</th>
            <th id="exam4Header">Examen 4</th>
            <th id="exam5Header">Examen 5</th>
            <th id="exam6Header">Examen 6</th>
            <th id="exam7Header">Examen 7</th>
            <th id="exam8Header">Examen 8</th>
            <th id="exam9Header">Examen 9</th>
            <th id="exam10Header">Examen 10</th>
            <th id="averageHeader">Moyenne</th>
            <th id="appreciationHeader">Appréciation</th>
          </tr>
        </thead>
        <tbody>
          <!-- la moyenne -->
          <tr>
            <td>Total</td>
            <td colspan="10"></td>
            <td id="totalOverage">89.6</td>
            <td id="totalAppreciation">Excellent</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`
        studentInfo.innerHTML = ''
        studentInfo.innerHTML = html
        shoStuLang()
      })
      .catch((err) => console.log(err))
    gradesTable = document.querySelector('.viewStudent__table tbody')

    getGradesByStudent(id).then((grades) => {
      populateGradesTable(grades)
      calculateAndPopulateAverage()
    })
  }

  //===================Populate Grades=================
  const getGradesByStudent = async (id) => {
    return await fetchData(apiUrls.getGradesByStudent, id)
  }

  const getCourseById = async (id) => {
    return await fetchData(apiUrls.getCourseById, id)
  }

  const exams = [
    'Exam 1',
    'Exam 2',
    'Exam 3',
    'Exam 4',
    'Exam 5',
    'Exam 6',
    'Exam 7',
    'Exam 8',
    'Exam 9',
    'Exam 10',
  ]

  const populateGradesTable = async (grades) => {
    // Get the last row (for overall average and appreciation)
    const lastRow = gradesTable.lastElementChild

    // Group grades by course
    const gradesByCourse = {}
    for (let i = 0; i < grades.length; i++) {
      const entry = grades[i]
      if (!gradesByCourse[entry.course]) {
        gradesByCourse[entry.course] = {}
      }
      gradesByCourse[entry.course][entry.exam] = entry.marks
    }

    // Create a new row for each course
    for (let courseId in gradesByCourse) {
      const courseGrades = gradesByCourse[courseId]
      const row = document.createElement('tr')

      // Create a new cell for course
      const courseCell = document.createElement('td')
      getCourseById(courseId).then((course) => {
        courseCell.textContent = course.course_name
      })
      row.appendChild(courseCell)

      let totalMarks = 0
      let totalExams = 0

      // Create a new cell for each exam
      exams.forEach((exam) => {
        const cell = document.createElement('td')

        if (courseGrades[exam] !== undefined) {
          cell.textContent = courseGrades[exam]
          totalMarks += courseGrades[exam]
          totalExams++
        } else {
          cell.textContent = '' // No marks for this exam
        }
        row.appendChild(cell)
      })

      // Calculate average and create a new cell for it
      const avgCell = document.createElement('td')
      const average = ((totalMarks / (totalExams * 20)) * 100).toFixed(2) // Calculate average percentage and round to two decimal places
      avgCell.textContent = average + '%'
      row.appendChild(avgCell)

      // Calculate appreciation and create a new cell for it
      const apprCell = document.createElement('td')
      if (average >= 90) {
        apprCell.textContent = 'Excellent'
        apprCell.style.color = '#4caf50'
      } else if (average >= 80) {
        apprCell.textContent = 'Très bien'
        apprCell.style.color = '#8bc34a'
      } else if (average >= 70) {
        apprCell.textContent = 'Bien'
        apprCell.style.color = '#ffc107'
      } else if (average >= 60) {
        apprCell.textContent = 'Assez bien'
        apprCell.style.color = '#ff9800'
      } else {
        apprCell.textContent = 'Insuffisant'
        apprCell.style.color = '#f44336'
      }
      row.appendChild(apprCell)

      // Insert the new row before the last row
      gradesTable.insertBefore(row, lastRow)
    }
    rows = gradesTable.querySelectorAll('tbody tr')
  }

  function calculateAndPopulateAverage() {
    // Get all the rows in the table body
    const rows = gradesTable.querySelectorAll('tbody tr')

    let totalMarks = 0
    let totalExams = 0

    // Iterate over each row (except the last one)
    for (let i = 0; i < rows.length - 1; i++) {
      const cells = rows[i].querySelectorAll('td')

      // Iterate over each cell (skip the first and last two cells)
      for (let j = 1; j < cells.length - 2; j++) {
        const marks = parseFloat(cells[j].textContent)
        if (!isNaN(marks)) {
          totalMarks += marks
          totalExams++
        }
      }
    }

    // Calculate the average
    const average = ((totalMarks / (totalExams * 20)) * 100).toFixed(2) // Calculate average percentage and round to two decimal places

    // Populate the average cell in the last row
    const averageCell = gradesTable.querySelector('#totalOverage')
    averageCell.textContent = average + '%'

    // Calculate appreciation and populate the appreciation cell in the last row
    const appreciationCell = gradesTable.querySelector('#totalAppreciation')
    if (average >= 90) {
      appreciationCell.textContent = 'Excellent'
      appreciationCell.style.color = '#4caf50'
    } else if (average >= 80) {
      appreciationCell.textContent = 'Très bien'
      appreciationCell.style.color = '#8bc34a'
    } else if (average >= 70) {
      appreciationCell.textContent = 'Bien'
      appreciationCell.style.color = '#ffc107'
    } else if (average >= 60) {
      appreciationCell.textContent = 'Assez bien'
      appreciationCell.style.color = '#ff9800'
    } else {
      appreciationCell.textContent = 'Insuffisant'
      appreciationCell.style.color = '#f44336'
    }
    spinner.style.display = 'none'
  }
})()
