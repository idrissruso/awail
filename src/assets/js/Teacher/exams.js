'use strict'
;(function () {
  const getClassesUrl = 'http://localhost:3000/api/getClasses/'
  const getStudentsUrl = 'http://localhost:3000/api/getStudents/'
  const getUserUrl = 'http://localhost:3000/api/getUserByRoleData/'
  const getCoursesUrl = 'http://localhost:3000/api/getCourses/'
  const tbody = document.querySelector('#tbody')
  const searchBtn = document.querySelector('#search-student')
  const classesSelect = document.querySelector('#class-select')
  const selectCourse = document.querySelector('#cours-select')
  const examSelect = document.querySelector('#exam-select')
  const form = document.querySelector('#form')
  const action = document.querySelector('#action')
  // function to get all the classes

  async function postData(url, data) {
    console.log(data)
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
  const getClasses = async () => {
    return await fetchData(getClassesUrl)
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
    return await fetchData(getCoursesUrl)
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
  const sendData = async () => {
    const rows = tbody.querySelectorAll('tr')
    let data = {}

    for (const row of rows) {
      const studentId = row.querySelector('td:nth-child(2)').dataset.studentId
      const pointsInput = row.querySelector('input[name="points1"]')
      const points = pointsInput.value
      data = {
        student: studentId,
        course: selectCourse.value,
        marks: points,
      }
      try {
        const response = await postData(createGradeUrl, data)
        console.log(response)
        if (response.status === 'success') {
          alert('Data sent successfully')
          document.location.reload()
        } else {
          alert('Error sending data')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
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
      tr.innerHTML = `
      <tr class="result-table-row">
          <td class="result-table-cell">${i + 1}</td>
          <td class="result-table-cell">${user.username}</td>
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
})()
