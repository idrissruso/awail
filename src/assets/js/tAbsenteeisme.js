'use strict'
;(function () {
  const baseUrl = window.API_URLS.apiUrl

  const apiUrls = {
    getClasses: `${baseUrl}getClasses/`,
    getStudents: `${baseUrl}getStudents/`,
    getUserByRoleData: `${baseUrl}getUserByRoleData/`,
    createAttendance: `${baseUrl}createAttendee/`,
  }

  const tbody = document.querySelector('#tbody')
  const searchInput = document.querySelector('#search-student')
  const classesSelect = document.querySelector('#class-select')
  const form = document.querySelector('#form')
  const absenteeismDate = document.querySelector('#date-select')
  const spinner = document.querySelector('#spinner')
  const spin = document.querySelector('#spinner2')

  //make date input today's date
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()
  absenteeismDate.value = yyyy + '-' + mm + '-' + dd
  let students = []

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
    return await fetchData(apiUrls.getClasses)
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
        const response = await postData(apiUrls.createAttendance, data)
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

  // function to populate the classes select element
  const populateClasses = async (classes) => {
    classesSelect.innerHTML = '' // Clear existing options

    // Create and add the first option with value 0 and default text
    const defaultOption = document.createElement('option')
    defaultOption.value = '0'
    defaultOption.textContent = 'Sélectionnez une classe' // Change this to your desired default text
    classesSelect.appendChild(defaultOption)

    // Loop through the classes and append the rest of the options
    classes.forEach((classe) => {
      const option = document.createElement('option')
      option.value = classe._id
      option.textContent = classe.class_name
      classesSelect.appendChild(option)
    })
    spinner.style.display = 'none'
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
    spin.classList.remove('spinner2__hide')
    // Clear existing rows in the table body
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild)
    }

    for (const [i, student] of students.entries()) {
      const tr = document.createElement('tr')
      const user = await getUserByRoleData(student._id)
      let name = `attendance${i}`
      tr.innerHTML = `
<tr class="table__row">
    <td class="table__cell">${i + 1}</td>
    <td class="table__cell" data-student-id=${student._id}>${user.username}</td>
    <td class="table__cell">${student.fullName}</td>
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
        <label class="checkbox-group__label checkbox-group__label-present">
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
    spin.classList.add('spinner2__hide')
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
    spin.classList.remove('spinner2__hide')
    const classId = e.target.value
    getStudents().then((data) => {
      let allStudents = data
      getStudentsByClass(allStudents, classId).then((st) => {
        students = st
        displayStudents(students)
      })
    })
  })

  // add event listener for search input to filter students by name
  let debounceTimeout
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      const searchValue = e.target.value.toLowerCase()
      const filteredStudents = students.filter((student) =>
        student.fullName.toLowerCase().includes(searchValue)
      )
      displayStudents(filteredStudents)
    }, 300) // adjust delay as needed
  })

  // add event listener for form submit to send data to server
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendData()
  })
})()
