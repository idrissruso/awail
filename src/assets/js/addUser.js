;(function () {
  if (typeof addNewUserModal !== 'undefined') delete addNewUserModal

  const addUserBtn = document.querySelector('#addUser')
  const blockedUsersBtn = document.querySelector('#blockedUsers')
  var addNewUserModal = document.querySelector('.addNewUser')
  const addNewUserContainer = document.querySelector('.addNewUser__container')
  const cancelBtn = document.querySelector('.addNewUser__btn-cancel')
  const blockBtn = document.querySelectorAll('.addUser__btn--block')
  var blockedUsersModal = document.querySelector('.blockUserModal')
  const blockUserCancelBtn = document.querySelector(
    '.blockUserModal__btn--cancel'
  )

  const blockedUsersContainer = document.querySelector(
    '.blockUserModal__content'
  )

  addUserBtn.addEventListener('click', () => {
    addNewUserModal.classList.add('addNewUserShow')
    addNewUserModal.classList.toggle('addNewUserHide')
    addNewUserContainer.classList.toggle('addNewUser__container--show')
  })

  addNewUserModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('addNewUser')) {
      addNewUserModal.classList.remove('addNewUserShow')
      addNewUserModal.classList.add('addNewUserHide')
      addNewUserContainer.classList.toggle('addNewUser__container--show')
    }
  })

  cancelBtn.addEventListener('click', () => {
    addNewUserModal.classList.remove('addNewUserShow')
    addNewUserModal.classList.add('addNewUserHide')
    addNewUserContainer.classList.toggle('addNewUser__container--show')
  })

  blockBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      blockedUsersModal.classList.add('blockUserModal-show')
      blockedUsersModal.classList.toggle('blockUserModal-hide')
      blockedUsersContainer.classList.toggle('shaking')
    })
  })

  blockedUsersModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('blockUserModal')) {
      blockedUsersModal.classList.remove('blockUserModal-show')
      blockedUsersModal.classList.add('blockUserModal-hide')
      blockedUsersContainer.classList.toggle('shaking')
    }
  })

  blockUserCancelBtn.addEventListener('click', () => {
    blockedUsersModal.classList.remove('blockUserModal-show')
    blockedUsersModal.classList.add('blockUserModal-hide')
    blockedUsersContainer.classList.toggle('shaking')
  })
})()
