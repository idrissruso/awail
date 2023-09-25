'use strict'

import { switchLang } from './langManager.js'

function getCookie(name) {
  const cookies = document.cookie.split('; ')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=')
    if (cookie[0] === name) {
      return cookie[1]
    }
  }
  return null
}

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
const userForm = document.querySelector('#userForm')
const loginButton = document.querySelector('.login__form-btn')
const message = document.querySelector('.login__form-message')
const roleInput = document.querySelector('#role')

let currentUser = getCookie('role') ? getCookie('role') : roleInput.value
if (getCookie('role')) {
  roleInput.value = getCookie('role')
  currentUser = getCookie('role')
  const card = currentUser.charAt(0).toUpperCase() + currentUser.slice(1)
  caption.textContent = `Accès ${card}`
}

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
      currentUser = 'parent'
    } else if (id === 'student-option-card') {
      currentLogo.src = 'student.png'
      caption.textContent = 'Accès des Enseignants'
      currentUser = 'teacher'
    } else if (id === 'admin-option-card') {
      currentLogo.src = 'admin.png'
      caption.textContent = 'Accès administrateur'
      currentUser = 'admin'
    }
    if (message) {
      message.classList.add('hidden')
      message.classList.remove('visible')
    }

    showLoginPopUp()
  })
})

showPasswordCheckbox.addEventListener('change', showPassword)

loginFormClose.addEventListener('click', hideLoginPopUp)

//handle login

// ... other code ...

userForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Set the role input value based on the current user
  if (currentUser === 'parent') {
    roleInput.value = 'parent'
  } else if (currentUser === 'teacher') {
    roleInput.value = 'teacher'
  } else if (currentUser === 'admin') {
    roleInput.value = 'admin'
  }

  // Submit the form
  userForm.submit()
})

//============language================

switchLang('aParent')
switchLang('aTeacher')
switchLang('aAdmin')
switchLang('login__caption')
switchLang('userName')
switchLang('passWord')
switchLang('showP')
switchLang('submit')
