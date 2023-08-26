;(function () {
  if (typeof addNewUserModal !== 'undefined') delete addNewUserModal

  const totalUsers = document.querySelector('#totalUsers')
  const maleUsers = document.querySelector('#maleUsers')
  const FemaleUsers = document.querySelector('#FemaleUsers')

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
  const getUsersUrl = 'http://localhost:3000/api/getUsers'
  const searchInput = document.querySelector('#user')
  let femaleUsers = 0
  let male = 0
  let total = 0
  let users = []

  const getUsersStatistics = async () => {
    try {
      const response = await fetch(getUsersUrl)
      const data = await response.json()
      total = data.length
      for (const user of data) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/get${
              user.role === 'Parent' ? 'Student' : user.role
            }/${user.roleData}`
          )
          const userData = await response.json()
          if (userData.gender === 'Female' || userData.gender === 'Feminin') {
            femaleUsers++
          } else {
            male++
          }
        } catch (err) {
          console.error(err)
        }
      }
    } catch (err) {
      console.error(err)
    } finally {
      totalUsers.textContent = total
      maleUsers.textContent = male
      FemaleUsers.textContent = femaleUsers
    }
  }

  getUsersStatistics()

  const getUsers = async () => {
    const response = await fetch(getUsersUrl)
      .then((res) => res.json())
      .then((data) => {
        users.push(...data)
        updateTable(users)
      })
      .catch((err) => console.error(err))
  }

  searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase()
    const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(searchValue)
    )
    updateTable(filteredUsers)
  })

  const getUserName = async (user) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/get${
          user.role === 'Parent' ? 'Student' : user.role
        }/${user.roleData}`
      )
      const userData = await response.json()
      return userData.fullName
    } catch (err) {
      console.error(err)
    }
  }

  async function updateTable(users) {
    const tableBody = document.querySelector('#tableBody')
    let tableContent = ''
    const role = (role) => {
      switch (role) {
        case 'Admin':
          return 'Admin'
        case 'Teacher':
          return 'Enseignant'
        case 'Student':
          return 'Etudiant'
        case 'Parent':
          return 'Parent'
        default:
          return ''
      }
    }
    for (const [i, user] of users.entries()) {
      const fullName = await getUserName(user)
      tableContent += `
      <tr class="addUser__row">
        <td class="addUser__cell">${i + 1}</td>
        <td class="addUser__cell">${user.username}</td>
        <td class="addUser__cell">${fullName}</td>
        <td class="addUser__cell">${
          user.role === 'Admin' ? 'Admin' : 'Utilisateur'
        }</td>
        <td class="addUser__cell">${role(user.role)}</td>
        <td class="addUser__cell">
          <span class="addUser__btn--block" data-user=${user._id}>Bloquer</span>
        </td>
      </tr>`
    }
    tableBody.innerHTML = tableContent
  }

  getUsers()

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
