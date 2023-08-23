;(function () {
  const table = document.querySelector('#table-body')
  const excusedA = document.querySelector('#ex_absence-rate')
  const nonExcusedA = document.querySelector('#nex_absence-rate')
  const tBody = document.querySelector('#absenteeism__tbody')
  const attendeesPopUp = document.querySelector('.absenteeism')
  const absenteeismCancel = document.querySelector(
    '.add-attendance__cancel-button'
  )
  const absenteeismModal = document.querySelector('.absenteeism__modal')
  const absenteeUrl = 'http://localhost:3000/api/getStudentAttendees/'

  table.addEventListener('click', async (e) => {
    if (e.target.classList.contains('manageStudents__btn--attendees')) {
      attendeesPopUp.classList.add('absenteeismShown')
      attendeesPopUp.classList.toggle('absenteeismHide')
      absenteeismModal.classList.add('absenteeism__container--show')
      const attendees = await getStudentAbsenteeism(e.target.dataset.student)
      console.log(attendees)
    }
  })

  absenteeismCancel.addEventListener('click', () => {
    attendeesPopUp.classList.remove('absenteeismShown')
    attendeesPopUp.classList.toggle('absenteeismHide')
    absenteeismModal.classList.remove('absenteeism__container--show')
  })

  const getStudentAbsenteeism = async (studentId) => {
    try {
      const response = await fetch(`${absenteeUrl}${studentId}`)
      const data = await response.json()
      console.log(data)
    } catch (err) {
      alert(err)
      tBody.innerHTML = `<p class="payment__history__error">Une erreur est survenue</p>`
    }
  }
})()
