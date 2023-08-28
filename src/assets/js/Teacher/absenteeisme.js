'use strict'
const { get } = require('browser-sync')

;(function () {
  const getClassesUrl = 'http://localhost:3000/api/getClasses'
  const getStudentsUrl = 'http://localhost:3000/api/getStudents'
  const tbody = document.querySelector('#tbody')

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

  const populateClasses = async (classes) => {
    const classesSelect = document.querySelector('#class-select')
    classesSelect.innerHTML = ''

    classes.forEach((classe) => {
      const option = document.createElement('option')
      option.value = classe._id
      option.textContent = classe.class_name
      classesSelect.appendChild(option)
    })
  }

  getClasses().then((classes) => {
    populateClasses(classes)
  })

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

  const displayStudents = async (students) => {
    tbody.innerHTML = ''
    students.forEach((student, i) => {
      const tr = document.createElement('tr')
      tr.innerHTML = `
      <tr class="table__row">
          <td class="table__cell">${i + 1}</td>
          <td class="table__cell">${student.fullName}</td>
          <td class="table__cell">${hg}</td>
          <td class="table__cell">
            <div class="checkbox-group">
              <label class="checkbox-group__label checkbox-group__label-absent">
                <input
                  type="radio"
                  name="attendance1"
                  class="checkbox-group__checkbox"
                  value="Absent"
                />
                Absent
              </label>
              <label
                class="checkbox-group__label checkbox-group__label-present"
              >
                <input
                  type="radio"
                  name="attendance1"
                  class="checkbox-group__checkbox"
                  value="Présent"
                />
                Présent
              </label>
            </div>
          </td>
        </tr>`
      tbody.appendChild(tr)
    })
  }
})()
