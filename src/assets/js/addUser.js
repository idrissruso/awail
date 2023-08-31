;(function () {
  if (typeof addNewUserModal !== 'undefined') delete addNewUserModal
  const baseUrl = 'https://awail.onrender.com/api/'

  const apiUrls = {
    getUsers: `${baseUrl}getUsers`,
    createAdmin: `${baseUrl}createAdmin`,
    createUser: `${baseUrl}createUser`,
  }

  const totalUsers = document.querySelector('#totalUsers')
  const maleUsers = document.querySelector('#maleUsers')
  const FemaleUsers = document.querySelector('#FemaleUsers')
  const activeUsers = document.querySelector('#actifUsers')
  const addUserBtn = document.querySelector('#addUser')
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

  const searchInput = document.querySelector('#user')
  const tableBody = document.querySelector('#tableBody')
  const imgInput = document.querySelector('#image')
  let femaleUsers = 0
  let male = 0
  let total = 0
  let users = []

  const codeImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        const base64EncodedData = reader.result.split(',')[1]
        resolve(base64EncodedData)
      }

      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(file)
    })
  }

  const getUsersStatistics = async () => {
    try {
      const response = await fetch(apiUrls.getUsers)
      const data = await response.json()
      total = data.length

      for (const user of data) {
        try {
          const response = await fetch(
            `${baseUrl}get${user.role === 'Parent' ? 'Student' : user.role}/${
              user.roleData
            }`
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
      activeUsers.textContent = total
    }
  }

  getUsersStatistics()

  const getUsers = async () => {
    const response = await fetch(apiUrls.getUsers)
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

  const getUserInfo = async (user) => {
    try {
      const response = await fetch(
        `${baseUrl}get${user.role === 'Parent' ? 'Student' : user.role}/${
          user.roleData
        }`
      )
      const userData = await response.json()

      return userData
    } catch (err) {
      console.error(err)
    }
  }

  async function updateTable(users) {
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
      const userInfo = await getUserInfo(user)

      tableContent += `
      <tr class="addUser__row">
        <td class="addUser__cell">${i + 1}</td>
        <td class="addUser__cell">${user.username}</td>
        <td class="addUser__cell">${userInfo.serial_number}</td>
          <td class="addUser__cell">${
            userInfo.Role ? userInfo.FullName : userInfo.fullName
          }</td>
        <td class="addUser__cell">${
          userInfo.Role ? userInfo.Email : userInfo.contact_info.email
        }</td>
        <td class="addUser__cell">${
          userInfo.Role ? userInfo.Telephone : userInfo.contact_info.phone
        }</td>
      
        <td class="addUser__cell">${
          user.role === 'Admin' ? 'Admin' : 'Utilisateur'
        }</td>
        <td class="addUser__cell">${role(user.role)}</td>
      </tr>`
    }
    tableBody.innerHTML = tableContent
  }

  getUsers()

  addUserBtn.addEventListener('click', async () => {
    addNewUserModal.classList.add('addNewUserShow')
    addNewUserModal.classList.toggle('addNewUserHide')
    addNewUserContainer.classList.toggle('addNewUser__container--show')

    const addUserForm = document.querySelector('#addUserForm')
    addUserForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const formData = new FormData(addUserForm)
      const name = formData.get('name')
      const surname = formData.get('surname')
      const gender = formData.get('gender')
      const serialNumber = formData.get('matricule')
      const email = formData.get('email')
      const telephone = formData.get('mobile')
      const role = formData.get('permission')

      const admin = {
        FullName: `${name} ${surname}`,
        Email: email,
        Telephone: telephone,
        Role: role,
        gender: gender,
        serial_number: serialNumber,
      }

      const user = {
        username: email,
        password: serialNumber,
        role: 'Admin',
        roleData: '',
        profileImage: imgInput.files[0]
          ? await codeImageToBase64(imgInput.files[0])
          : undefined,
        profileImageType: imgInput.files[0]
          ? imgInput.files[0].type
          : undefined,
      }

      try {
        const response = await fetch(apiUrls.createAdmin, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(admin),
        })

        if (response.ok) {
          const adminData = await response.json()
          user.roleData = adminData._id

          const res = await fetch(apiUrls.createUser, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
          const userData = await res.json()
          console.log(userData)
          if (res.ok) {
            alert('Utilisateur ajouté avec succès')
            location.reload()
          }
        }
      } catch (err) {
        alert(
          `An error occurred while adding the user. Error message: ${err.message}`
        )
      }
    })
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

  blockedUsersCancelBtn.addEventListener('click', () => {
    blockedUSersModal.classList.remove('blockedUsersModal-show')
    blockedUSersModal.classList.add('blockedUsersModal-hide')
    blockedUsersTable.classList.toggle('blockedUsersTable-show')
  })
})()
