;(function () {
  const baseUrl = window.API_URLS.apiUrl
  const apiUrls = {
    getClasses: `${baseUrl}getClasses/`,
    getScheduleByClass: `${baseUrl}getHorairesByClass/`, // Add the API endpoint for fetching schedule by class
  }

  const spin = document.querySelector('#spinner2')
  const classesSelect = document.querySelector('#class-select')
  const scheduleTable = document.querySelector('.class-schedule tbody') // Select the table body

  spin.classList.remove('spinner2__hide')

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
      console.log(data)
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

  const getScheduleByClass = async (classId) => {
    return await fetchData(apiUrls.getScheduleByClass, classId) // Fetch schedule by class ID
  }

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
    console.log(schedule)
    scheduleTable.innerHTML = '' // Clear the table body

    schedule.forEach((entry) => {
      const row = document.createElement('tr')

      Object.keys(entry).forEach((day) => {
        if (day !== 'time') {
          const cell = document.createElement('td')
          cell.textContent = entry[day]
          row.appendChild(cell)
        }
      })

      scheduleTable.appendChild(row)
    })
  }

  // Event listener for class selection
  classesSelect.addEventListener('change', async () => {
    const selectedClassId = classesSelect.value
    console.log(selectedClassId)
    if (selectedClassId !== '0') {
      try {
        const schedule = await getScheduleByClass(selectedClassId)
        populateScheduleTable(schedule)
      } catch (error) {
        console.error('Error fetching schedule:', error)
      }
    } else {
      // Clear the schedule table if no class is selected
      scheduleTable.innerHTML = ''
    }
  })

  getClasses().then((classes) => populateClasses(classes))
})()
