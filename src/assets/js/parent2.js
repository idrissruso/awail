;(function () {
  const baseUrl = window.API_URLS.apiUrl
  const apiUrls = {
    getClassById: `${baseUrl}getClass/`,
    getHoraireByClass: `${baseUrl}getHorairesByClass/`,
    getAttendanceByStudent: `${baseUrl}getStudentAttendees/`,
    getGradesByStudent: `${baseUrl}getStudentGrades/`,
    getCourseById: `${baseUrl}getCourse/`,
  }
  const date = document.querySelector('#date')
  const img = document.querySelector('.profile__img')
  const scheduleTable = document.querySelector('.class-schedule tbody')
  const absenteeTable = document.querySelector('.absence-details__table tbody')
  const gradesTable = document.querySelector('#resultsTable tbody')

  let schedules = []
  let attendees = []

  async function fetchData(url, id = '') {
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

  if (user.profileImage) {
    img.src = `data:${user.profileImageType};base64,${user.profileImage}`
  } else {
    img.src = `../profile.png`
  }

  const getClassById = async (id) => {
    const response = await fetch(`${apiUrls.getClassById}${id}`)
    const data = await response.json()
    return data
  }

  getClassById(user.class).then((classe) => {
    const classeName = document.querySelector('#classe')
    classeName.textContent = classe.class_name
  })

  const formatDate = (date) => {
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    return `${day}/${month}/${year}`
  }
  date.textContent = formatDate(user.dateOfBirth)

  // horaire

  const getHoraireByClass = async (id) => {
    return await fetchData(apiUrls.getHoraireByClass, id)
  }

  const populateScheduleTable = (schedule) => {
    scheduleTable.innerHTML = '' // Clear the table body
    schedule.schedule.forEach((entry) => {
      const row = document.createElement('tr')

      // Create the time cell
      const timeCell = document.createElement('td')
      timeCell.contentEditable = true
      timeCell.textContent = entry.time
      row.appendChild(timeCell)

      // Create cells for each day
      const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      days.forEach((day) => {
        const cell = document.createElement('td')
        cell.contentEditable = true
        cell.textContent = entry[day]
        row.appendChild(cell)
      })

      scheduleTable.appendChild(row)
    })
  }

  const populateSchedule = () => {
    const schedule = schedules.find((schedule) => schedule.class === user.class)
    populateScheduleTable(schedule)
  }
  getHoraireByClass(user.class).then((horaires) => {
    schedules = horaires
    populateSchedule()
  })

  //===================== Attendance =====================

  const getAttendanceByStudent = async (id) => {
    return await fetchData(apiUrls.getAttendanceByStudent, id)
  }

  const populateAttendanceTable = (attendees) => {
    absenteeTable.innerHTML = '' // Clear the table body
    attendees.forEach((entry) => {
      const row = `<tr class="absence-details__table-row">
        <td class="absence-details__table-cell date">${formatDate(
          entry.date
        )}</td>
        <td class="absence-details__table-cell ${
          entry.explanation == 'Non justifié' ? 'no' : 'yes'
        }">${entry.explanation}</td>
      </tr>`
      absenteeTable.insertAdjacentHTML('beforeend', row)
    })
  }

  const calculateAbsence = (attendees) => {
    const total = attendees.length
    const justified = attendees.filter(
      (attendee) => attendee.explanation === 'Justifié'
    ).length
    const unJustified = attendees.filter(
      (attendee) => attendee.explanation === 'Non justifié'
    ).length
    const percentageNoj = Math.round((unJustified / total) * 100)
    const percentageJ = Math.round((justified / total) * 100)
    const absenceNoJ = document.querySelector('.attendance-overview__absent')
    const absenceJ = document.querySelector('.attendance-overview__present')
    absenceJ.textContent = `Justifié : ${percentageJ}%`
    absenceNoJ.textContent = `Non justifié : ${percentageNoj}%`
  }

  getAttendanceByStudent(user._id).then((entries) => {
    attendees = entries
    populateAttendanceTable(attendees)
    calculateAbsence(attendees)
  })

  //==========================grades==========================

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
    gradesTable.innerHTML = '' // Clear the table body

    let totalMarks = 0
    let totalExams = 0

    for (let i = 0; i < grades.length; i++) {
      const entry = grades[i]
      const row = document.createElement('tr')

      // Create a new cell for course
      const courseCell = document.createElement('td')
      courseCell.textContent = await getCourseById(entry.course).course_name
      row.appendChild(courseCell)

      // Create a new cell for each exam
      exams.forEach((exam) => {
        const cell = document.createElement('td')
        if (entry.exam === exam) {
          cell.textContent = entry.marks
          totalMarks += entry.marks
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
      } else if (average >= 80) {
        apprCell.textContent = 'Very Good'
      } else if (average >= 70) {
        apprCell.textContent = 'Good'
      } else if (average >= 60) {
        apprCell.textContent = 'Average'
      } else {
        apprCell.textContent = 'Poor'
      }
      row.appendChild(apprCell)

      gradesTable.appendChild(row)
    }
  }

  getGradesByStudent(user._id).then((grades) => {
    populateGradesTable(grades)
  })
})()
