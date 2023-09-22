;(function () {
  const baseUrl = window.API_URLS.apiUrl
  const apiUrls = {
    getClasses: `${baseUrl}getClasses/`,
    getScheduleByClass: `${baseUrl}getHorairesByClass/`, // Add the API endpoint for fetching schedule by class
    getHoraires: `${baseUrl}getHoraires`,
    updateHoraire: `${baseUrl}updateHoraire/`, // Add the API endpoint for updating schedule
  }

  const spin = document.querySelector('#spinner2')
  const classesSelect = document.querySelector('#class-select')
  const scheduleTable = document.querySelector('.class-schedule tbody') // Select the table body
  let schedules = []
  let schId = '' // Replace with your schedule ID

  spin.classList.remove('spinner2__hide')

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
    return await fetchData(apiUrls.getClasses)
  }

  const getHoraires = async () => {
    return await fetchData(apiUrls.getHoraires)
  }

  getHoraires().then((horaires) => {
    schedules = horaires
  })

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
    spin.classList.add('spinner2__hide')
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

  // Event listener for class selection
  classesSelect.addEventListener('change', async () => {
    const selectedClassId = classesSelect.value
    if (selectedClassId !== '0') {
      try {
        const schedule = await schedules.find(
          (schedule) => schedule.class === selectedClassId
        )
        populateScheduleTable(schedule)
        schId = schedule._id
        console.log(schId)
      } catch (error) {
        console.error('Error fetching schedule:', error)
      }
    } else {
      // Clear the schedule table if no class is selected
      scheduleTable.innerHTML = ''
    }
  })

  getClasses().then((classes) => populateClasses(classes))

  // Assuming you have a reference to the button with class "form__button"
  const updateButton = document.querySelector('.form__button')

  // Add a click event listener to the "Mettre à jour" button
  // ...

  // Add a click event listener to the "Mettre à jour" button
  updateButton.addEventListener('click', (event) => {
    spin.classList.remove('spinner2__hide')
    event.preventDefault() // Prevent the form from submitting

    // Create an empty array to store the updated schedule data
    const updatedSchedule = []

    const dayNames = [
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ]

    // Loop through the table rows to collect the updated data
    for (let i = 0; i < scheduleTable.rows.length; i++) {
      const row = scheduleTable.rows[i]
      const time = row.cells[0].textContent.trim() // Trim to remove leading/trailing spaces
      const rowData = {
        time,
      }

      // Flag to check if the row has any non-empty cells
      let hasNonEmptyCells = false

      for (let j = 0; j < row.cells.length; j++) {
        const day = dayNames[j - 1]
        const cellContent = row.cells[j].textContent.trim() // Trim cell content

        // Check if cell content is not empty before adding it to rowData
        if (cellContent !== '') {
          rowData[day] = cellContent
          hasNonEmptyCells = true // Set the flag if a non-empty cell is found
        }
      }

      // Push the rowData to updatedSchedule only if it has non-empty cells
      if (hasNonEmptyCells) {
        updatedSchedule.push(rowData)
      }
    }

    // Send the updated schedule data to the server for saving
    const scheduleId = schId // Replace with your schedule ID
    updateSchedule(scheduleId, updatedSchedule)
  })

  // ...

  // Function to update the schedule data on the server
  async function updateSchedule(scheduleId, updatedSchedule) {
    updatedSchedule = { class: classesSelect.value, schedule: updatedSchedule }
    try {
      const response = await fetch(`${apiUrls.updateHoraire}${scheduleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSchedule),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      spin.classList.add('spinner2__hide')
      window.location.reload()
    } catch (error) {
      console.error('Error:', error)
    }
  }
})()
