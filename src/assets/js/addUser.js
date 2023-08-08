;(function () {
  if (typeof addNewUserModal !== 'undefined') delete addNewUserModal

  const addUserBtn = document.querySelector('#addUser')
  const blockedUsersBtn = document.querySelector('#blockedUsers')
  var addNewUserModal = document.querySelector('.addNewUser')
  const addNewUserContainer = document.querySelector('.addNewUser__container')
  const cancelBtn = document.querySelector('.addNewUser__btn-cancel')
  const blockBtn = document.querySelectorAll('.addUser__btn--block')
  var blockageModal = document.querySelector('.blockUserModal')
  const blockUserCancelBtn = document.querySelector(
    '.blockUserModal__btn--cancel'
  )

  const blockedUsersContainer = document.querySelector(
    '.blockUserModal__content'
  )

  var blockedUSersModal = document.querySelector('.blockedUsersModal')
  const blockedUsersTable = document.querySelector('.blockedUsersTable')
  const blockedUsersCancelBtn = document.querySelector(
    '.blockedUsersModal__close-btn'
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
      blockageModal.classList.add('blockUserModal-show')
      blockageModal.classList.toggle('blockUserModal-hide')
      blockedUsersContainer.classList.toggle('shaking')
    })
  })

  blockageModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('blockUserModal')) {
      blockageModal.classList.remove('blockUserModal-show')
      blockageModal.classList.add('blockUserModal-hide')
      blockedUsersContainer.classList.toggle('shaking')
    }
  })

  blockUserCancelBtn.addEventListener('click', () => {
    blockageModal.classList.remove('blockUserModal-show')
    blockageModal.classList.add('blockUserModal-hide')
    blockedUsersContainer.classList.toggle('shaking')
  })

  blockedUsersBtn.addEventListener('click', () => {
    blockedUSersModal.classList.add('blockedUsersModal-show')
    blockedUSersModal.classList.toggle('blockedUsersModal-hide')
    blockedUsersTable.classList.toggle('blockedUsersTable-show')
  })

  blockedUsersCancelBtn.addEventListener('click', () => {
    blockedUSersModal.classList.remove('blockedUsersModal-show')
    blockedUSersModal.classList.add('blockedUsersModal-hide')
    blockedUsersTable.classList.toggle('blockedUsersTable-show')
  })
})()
