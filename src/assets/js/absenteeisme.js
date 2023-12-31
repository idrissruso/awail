;(function () {
  const absenteeismLang = () => {
    window.switchLang('absenteeismTitle')
    window.switchLang('attendanceListTitle')
    window.switchLang('absenceDateLabel')
    window.switchLang('statusLabel')
    window.switchLang('cancelButton')
    window.switchLang('submitButton')
    window.switchLang('modifyAttendanceTitle')
    window.switchLang('absenteeismDatedAbsence')
    window.switchLang('absenteeismStatus')
  }

  const baseUrl = window.API_URLS.apiUrl

  const apiUrls = {
    absenteeUrl: `${baseUrl}getStudentAttendees/`,
    updateUrl: `${baseUrl}updateAttendee/`,
  }
  const table = document.querySelector('#table-body')
  const form = document.querySelector('.add-attendance__form')
  const excusedA = document.querySelector('#ex_absence-rate')
  const nonExcusedA = document.querySelector('#nex_absence-rate')
  const tBody = document.querySelector('#absenteeism__tbody')
  const attendeesPopUp = document.querySelector('.absenteeism')
  const absenteeismCancel = document.querySelector(
    '.add-attendance__cancel-button'
  )
  const absenteeismModal = document.querySelector('.absenteeism__modal')
  const select = document.querySelector('#absence-date')
  const spinner = document.querySelector('#spinner2')

  table.addEventListener('click', async (e) => {
    if (e.target.classList.contains('manageStudents__btn--attendees')) {
      spinner.classList.remove('spinner2__hide')
      attendeesPopUp.classList.add('absenteeismShown')
      attendeesPopUp.classList.toggle('absenteeismHide')
      absenteeismModal.classList.add('absenteeism__container--show')
      getStudentAbsenteeism(e.target.dataset.student) // Replace 'studentId' with the actual student ID
    }
  })

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  absenteeismCancel.addEventListener('click', () => {
    attendeesPopUp.classList.remove('absenteeismShown')
    attendeesPopUp.classList.toggle('absenteeismHide')
    absenteeismModal.classList.remove('absenteeism__container--show')
  })

  const getStudentAbsenteeism = async (studentId) => {
    try {
      const response = await fetch(`${apiUrls.absenteeUrl}${studentId}`)
      const data = await response.json()

      select.innerHTML = ''
      tBody.innerHTML = ''

      data.forEach((absence) => {
        const option = document.createElement('option')
        const html = `<tr>
            <td>${formatDate(absence.date)}</td>
            <td>${absence.explanation}</td>
          </tr>`
        option.value = absence._id
        option.text = formatDate(absence.date)
        select.appendChild(option)
        tBody.insertAdjacentHTML('beforeend', html)
      })

      return data
    } catch (err) {
      alert('Une erreur est survenue')
      console.error('Error fetching absenteeism data:', err)
      tBody.innerHTML = `<p class="payment__history__error">Une erreur est survenue</p>`
      throw err
    } finally {
      spinner.classList.add('spinner2__hide')
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    spinner.classList.remove('spinner2__hide')
    const absenceDate = document.querySelector('#absence-date').value
    const status = document.querySelector('#status').value

    // Update the absence explanation in the database
    try {
      const response = await fetch(`${apiUrls.updateUrl}${absenceDate}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          explanation: status,
        }),
      })

      if (response.ok) {
        // reset the form
        form.reset()
        spinner.classList.add('spinner2__hide')
        document.location.reload()
      } else {
        alert('Une erreur est survenue')
        console.error(
          'An error occurred while updating the absence explanation'
        )
        document.location.reload()
      }
    } catch (err) {
      alert('Une erreur est survenue')
      document.location.reload()
    }
  })

  absenteeismLang()
  // Call the function to populate the options when the page loads
})()
