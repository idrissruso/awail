'use strict'
;(function () {
  const getClassesUrl = 'http://localhost:3000/api/getClasses/'
  const getStudentsUrl = 'http://localhost:3000/api/getStudents/'
  const getUserUrl = 'http://localhost:3000/api/getUserByRoleData/'
  const createAttendanceUrl = 'http://localhost:3000/api/createAttendee/'
  const tbody = document.querySelector('#tbody')
  const searchBtn = document.querySelector('#search-student')
  const classesSelect = document.querySelector('#class-select')
  const form = document.querySelector('#form')
  const absenteeismDate = document.querySelector('#date-select')

  //make date input today's date
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()
  absenteeismDate.value = yyyy + '-' + mm + '-' + dd

  // function to get all the classes

  async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      } else {
        console.log('Data sent successfully')
      }

      return await response.json()
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

  async function fetchData(url, id = '') {
    try {
      const response = await fetch(`${url}${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return await response.json()
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }
  const getClasses = async () => {
    return await fetchData(getClassesUrl)
  }

  const sendData = async () => {
    const rows = tbody.querySelectorAll('tr')
    let data = {}
    let success = true

    for (const row of rows) {
      const studentId = row.querySelector('td:nth-child(2)').dataset.studentId
      const absentInput = row.querySelector('input[value="Absent"]')
      const presentInput = row.querySelector('input[value="Présent"]')
      let attendance
      if (absentInput.checked) {
        attendance = 'Absent'
      } else if (presentInput.checked) {
        attendance = 'Present'
      }
      data = {
        student: studentId,
        date: absenteeismDate.value,
        status: attendance,
      }
      try {
        const response = await postData(createAttendanceUrl, data)
      } catch (error) {
        console.error('Error:', error)
        success = false
      }
    }

    if (success) {
      alert('Enregistrement effectué avec succès')
      document.location.reload()
    } else {
      alert("Impossible d'enregistrer les absences plusieurs fois")
      document.location.reload()
    }
  }

  // send the data to the server

  // function to populate the classes select element

  async function populateClasses(classes) {
    classesSelect.innerHTML = classes
      .map(
        (classe) =>
          `<option value="${classe._id}">${classe.class_name}</option>`
      )
      .join('')
  }

  // function to get all the students
  const getStudents = async () => {
    return await fetchData(getStudentsUrl)
  }

  // function to get a student by id

  const getUserByRoleData = async (id) => {
    return await fetchData(getUserUrl, id)
  }

  // function to display students in the table
  const displayStudents = async (students) => {
    tbody.innerHTML = ''
    for (const [i, student] of students.entries()) {
      const tr = document.createElement('tr')
      const user = await getUserByRoleData(student._id)
      let name = `attendance${i}`
      tr.innerHTML = `
      <tr class="table__row">
          <td class="table__cell">${i + 1}</td>
          <td class="table__cell" data-student-id = ${student._id}>${
        user.username
      }</td>
          <td class="table__cell" >${student.fullName}</td>
          <td class="table__cell">
            <div class="checkbox-group">
              <label class="checkbox-group__label checkbox-group__label-absent">
                <input
                  type="radio"
                  name=${name}
                  class="checkbox-group__checkbox"
                  value="Absent"
                  required
                />
                Absent
              </label>
              <label
                class="checkbox-group__label checkbox-group__label-present"
              >
                <input
                  type="radio"
                  name=${name}
                  class="checkbox-group__checkbox"
                  value="Présent"
                  required
                />
                Présent
              </label>
            </div>
          </td>
        </tr>`
      tbody.appendChild(tr)
    }
  }

  // function to filter students by class id
  const getStudentsByClass = async (students, classId) => {
    return students.filter((student) => student.class === classId)
  }

  // populate the classes select element on page load
  getClasses().then((classes) => {
    populateClasses(classes)
  })

  // display all students on page load and add event listener for search input
  // add event listener for classes select element to filter students by class id
  // add event listener for classes select element to filter students by class id
  classesSelect.addEventListener('change', (e) => {
    const classId = e.target.value
    getStudents().then((data) => {
      let students = data
      getStudentsByClass(students, classId).then((students) => {
        displayStudents(students)
      })
    })
  })

  // add event listener for search input to filter students by name
  searchBtn.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase()
    const classId = classesSelect.value
    getStudents().then((data) => {
      let students = data
      getStudentsByClass(students, classId).then((students) => {
        const filteredStudents = students.filter((student) =>
          student.fullName.toLowerCase().includes(searchValue)
        )
        displayStudents(filteredStudents)
      })
    })
  })

  // add event listener for form submit to send data to server
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData()
  })
})()
