'use strict'
;(function () {
  const getClassesUrl = 'http://localhost:3000/api/getClasses'
  const getStudentsUrl = 'http://localhost:3000/api/getStudents'
  const getUserUrl = 'http://localhost:3000/api/getUserByRoleData'
  const getCoursesUrl = 'http://localhost:3000/api/getCourses'
  const tbody = document.querySelector('#tbody')
  const searchBtn = document.querySelector('#search-student')
  const classesSelect = document.querySelector('#class-select')
  const selectCourse = document.querySelector('#cours-select')
  // function to get all the classes
  const getClasses = async () => {
    try {
      const response = await fetch(getClassesUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        console.log('Not successful')
      }
    } catch (error) {
      console.error('Error:', error)
    }
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
    try {
      const response = await fetch(getCoursesUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        console.log('Not successful')
      }
    } catch (error) {
      console.error('Error:', error)
    }
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

  // function to get all the students
  const getStudents = async () => {
    try {
      const response = await fetch(getStudentsUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        console.log('Not successful')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // function to get a student by id

  const getUserByRoleData = async (id) => {
    try {
      const response = await fetch(`${getUserUrl}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        return data
      } else {
        console.log('Not successful')
      }
    } catch (error) {
      console.error('Error:', error)
    }
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
