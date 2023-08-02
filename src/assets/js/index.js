'use strict'

const parentLog = document.querySelector('#parent-option-card')
const studentLog = document.querySelector('#student-option-card')
const adminLog = document.querySelector('#admin-option-card')
const sectionLogin = document.querySelector('.section-login')
const loginForm = document.querySelector('.section-login__container')
const loginFormClose = document.querySelector('.login__form-close')
const currentLogo = document.querySelector('#login-box__logo')
const caption = document.querySelector('#login__caption')
const password = document.querySelector('#password')
const showPasswordCheckbox = document.querySelector('#checker')

// Display login pop up
const showLoginPopUp = () => {
  sectionLogin.classList.remove('hidden')
  sectionLogin.classList.add('visible')
  loginForm.style.transform = 'scale(1)'
}

//show password

const showPassword = () => {
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
}
// Hide login pop up
const hideLoginPopUp = () => {
  sectionLogin.classList.remove('visible')
  sectionLogin.classList.add('hidden')
  loginForm.style.transform = 'scale(0.5)'
}

// Event listeners
;[parentLog, studentLog, adminLog].forEach((element) => {
  element.addEventListener('click', (e) => {
    const id = e.currentTarget.id
    if (id === 'parent-option-card') {
      currentLogo.src = 'family.png'
      caption.textContent = 'Accès des parents'
    } else if (id === 'student-option-card') {
      currentLogo.src = 'student.png'
      caption.textContent = 'Accès des élèves'
    } else if (id === 'admin-option-card') {
      currentLogo.src = 'admin.png'
      caption.textContent = 'Accès administrateur'
    }
    showLoginPopUp()
  })
})

showPasswordCheckbox.addEventListener('change', showPassword)

loginFormClose.addEventListener('click', hideLoginPopUp)
