;(function () {
  const baseUrl = window.API_URLS.apiUrl
  const apiUrls = {
    getClassById: `${baseUrl}getClass/`,
    getHoraireByClass: `${baseUrl}getHorairesByClass/`,
  }
  const date = document.querySelector('#date')
  const img = document.querySelector('.profile__img')
  const scheduleTable = document.querySelector('.class-schedule tbody')

  let schedules = []

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
    console.log(schedules)
    populateScheduleTable(schedule)
  }
  getHoraireByClass(user.class).then((horaires) => {
    schedules = horaires
    populateSchedule()
  })
})()
