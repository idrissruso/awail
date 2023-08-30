'use strict'
;(function () {
  const baseUrl = 'http://localhost:3000/api/'

  const apiUrls = {
    getClasses: `${baseUrl}getClasses/`,
    getStudents: `${baseUrl}getStudents/`,
    getUserByRoleData: `${baseUrl}getUserByRoleData/`,
    getCourses: `${baseUrl}getCourses/`,
    updateGrade: `${baseUrl}updateGrade/`,
    createGrade: `${baseUrl}createGrade/`,
    getStudentGrades: `${baseUrl}getStudentGrades/`,
  }

  const tbody = document.querySelector('#tbody')
  const searchBtn = document.querySelector('#search-student')
  const classesSelect = document.querySelector('#class-select')
  const selectCourse = document.querySelector('#cours-select')
  const examSelect = document.querySelector('#exam-select')
  const form = document.querySelector('#form')
  const action = document.querySelector('#action')

  let action_ = 'Add'
  // function to get all the classes

  async function postData(url, data, method = 'POST', id = '') {
    console.log(data)
    try {
      const response = await fetch(`${url}${id}`, {
        method: method,
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

  // function to update a grade

  // function to get all the classes
  const getClasses = async () => {
    return await fetchData(apiUrls.getClasses)
  }

  // function to get all the grades
  const getStudentGrades = async (id) => {
    return await fetchData(apiUrls.getStudentGrades, id)
  }

  // function to populate the classes select element
  const populateClasses = async (classes) => {
    classesSelect.innerHTML = ''

    classes.forEach((classe) => {
      const option = document.createElement('option')
      option.value = classe._id
      option.textContent = classe.class_name
      classesSelect.appendChild(option)
    })
  }

  const getCourses = async () => {
    return await fetchData(apiUrls.getCourses)
  }

  const populateCourses = async (courses) => {
    selectCourse.innerHTML = ''

    courses.forEach((course) => {
      const option = document.createElement('option')
      option.value = course._id
      option.textContent = course.course_name
      selectCourse.appendChild(option)
    })
  }

  // manage action select element

  // Outside of the action event listener
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (action_ === 'Add') {
      sendData()
    } else if (action_ === 'Update') {
      sendData(true)
    }
  })

  // Inside the action event listener
  action.addEventListener('change', async (e) => {
    action_ = e.target.value
    const classId = classesSelect.value // Assuming you also want to consider the selected class
    try {
      const students = await getStudentsByClass(await getStudents(), classId)
      displayStudents(students)
    } catch (error) {
      console.error('Error fetching and displaying students:', error)
    }
  })

  const sendData = async (update = false) => {
    const rows = tbody.querySelectorAll('tr')
    let data = {}
    let success = true

    for (const row of rows) {
      const studentId = row.querySelector('td:nth-child(2)').dataset.studentId
      console.log(studentId)
      const pointsInput = row.querySelector('input[name="points1"]')
      const gradeId = pointsInput.dataset.gradeId
      const points = pointsInput.value

      try {
        let response
        if (update) {
          data = {
            marks: points,
          }
          response = await postData(apiUrls.updateGrade, data, 'PATCH', gradeId)
        } else {
          data = {
            student: studentId,
            course: selectCourse.value,
            exam: examSelect.value,
            marks: points,
          }
          response = await postData(apiUrls.createGrade, data)
        }
      } catch (error) {
        console.error('Error:', error)
        success = false
      }
    }

    if (success) {
      alert('Enregistrement effectué avec succès')
      document.location.reload()
    } else {
      alert(
        `Impossible d'enregistrer les points plusieurs fois, veillez changer l'action a ${
          update ? 'Metre a jour' : 'Enregistrer'
        } pour modifier les points`
      )
    }
  }

  // function to get all the students
  const getStudents = async () => {
    return await fetchData(apiUrls.getStudents)
  }

  // function to get a student by id

  const getUserByRoleData = async (id) => {
    return await fetchData(apiUrls.getUserByRoleData, id)
  }

  // function to display students in the table
  const displayStudents = async (students) => {
    tbody.innerHTML = ''
    for (const [i, student] of students.entries()) {
      const grades =
        action_ === 'Update' ? await getStudentGrades(student._id) : []
      const grade = await grades.filter(
        (grade) => grade.exam === examSelect.value
      )[0]
      console.log(grade)
      console.log(action_)
      console.log(examSelect.value)
      const tr = document.createElement('tr')
      const user = await getUserByRoleData(student._id)
      tr.innerHTML = `
      <tr class="result-table-row">
          <td class="result-table-cell">${i + 1}</td>
          <td class="result-table-cell" data-student-id = "${student._id}">${
        user.username
      }</td>
          <td class="result-table-cell">${student.fullName}</td>
          <td class="result-table-cell">
            <div class="checkbox-group">
              <input
                type="number"
                name="points1"
                class="result-form-input"
                placeholder="00"
                min="0"
                max="20"
                value="${grade ? grade.marks : ''}"
                data-grade-id = "${grade ? grade._id : ''}"
              />
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

  // populate the courses select element on page load
  getCourses().then((courses) => {
    populateCourses(courses)
  })

  // display all students on page load and add event listener for search input
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
  examSelect.addEventListener('change', async () => {
    const classId = classesSelect.value // Assuming you also want to consider the selected class
    try {
      const students = await getStudentsByClass(await getStudents(), classId)
      displayStudents(students)
    } catch (error) {
      console.error('Error fetching and displaying students:', error)
    }
  })
})()
