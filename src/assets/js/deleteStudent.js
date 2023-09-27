;(function () {
  window.switchLang('deleteModalTitle')
  window.switchLang('deleteModalMessage')
  window.switchLang('deleteModalCancel')
  window.switchLang('deleteModalConfirm')

  const baseUrl = window.API_URLS.apiUrl

  let studentId
  let deletePopUp = document.querySelector('.deleteStudent')
  const confirmBtn = document.querySelector('.deleteModal__btn--confirm')
  const table = document.querySelector('#table-body')
  const deleteModalCancelBtn = document.querySelector(
    '.deleteModal__btn--cancel'
  )
  const deleteMOdalConfirmBtn = document.querySelector(
    '.deleteModal__btn--confirm'
  )
  const modalContent = document.querySelector('.deleteModal__content')

  deleteModalCancelBtn.addEventListener('click', () => {
    deletePopUp.classList.remove('modalShown')
    deletePopUp.classList.toggle('modalHide')
  })

  deletePopUp.addEventListener('click', (e) => {
    if (e.target === deletePopUp) {
      deletePopUp.classList.remove('modalShown')
      deletePopUp.classList.toggle('modalHide')
    }
  })

  deleteMOdalConfirmBtn.addEventListener('click', () => {
    deletePopUp.classList.remove('modalShown')
    deletePopUp.classList.toggle('modalHide')
  })

  modalContent.addEventListener('animationend', () => {
    modalContent.classList.remove('shaking')
  })

  const deleteBtn = document.querySelectorAll('.manageStudents__btn--remove')

  table.addEventListener('click', (e) => {
    let target = e.target
    if (target.tagName === 'use') {
      target = target.parentNode
    }
    if (
      target.classList.contains('manageStudents__btn--remove') ||
      target.classList.contains('bin')
    ) {
      deletePopUp.classList.add('modalShown')
      deletePopUp.classList.toggle('modalHide')
      modalContent.classList.add('shaking')
      studentId = target.dataset.student
    }
  })

  const deleteUser = async (id) => {
    const deleteUserUrl = `${baseUrl}deleteUserByRoleData/${id}`

    try {
      const response = await fetch(deleteUserUrl, {
        method: 'DELETE',
      })

      if (response.status === 204) {
        alert('Eleve supprimé avec succès')
        window.location.reload()
      }
    } catch (err) {
      console.log(err)
    }
  }

  confirmBtn.addEventListener('click', async () => {
    const deleteStudentUrl = `${baseUrl}deleteStudent/${studentId}`
    const deleteUserUrl = `${baseUrl}deleteUserByRoleData/${studentId}`

    try {
      const response = await fetch(deleteStudentUrl, {
        method: 'DELETE',
      })

      if (response.status === 204) {
        const userResponse = await fetch(deleteUserUrl, {
          method: 'DELETE',
        })

        if (userResponse.status === 204) {
          alert('Eleve supprimé avec succès')
          window.location.reload()
        }
      }
    } catch (err) {
      console.log(err)
    }
  })
})()
