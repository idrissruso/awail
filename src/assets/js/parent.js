/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
  main = document.getElementById('main'),
  navClose = document.getElementById('nav-close'),
  logoutBtn = document.getElementById('logout')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (headerToggle) {
  headerToggle.addEventListener('click', () => {
    main.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    main.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const main = document.getElementById('main')
  // When we click on each nav__link, we remove the show-menu class
  main.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionTop = current.offsetTop // Remove the offset
    const sectionHeight = current.offsetHeight
    const sectionId = current.getAttribute('id')

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== logout ===============*/

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user')
  window.location.href = '/logout'
})
