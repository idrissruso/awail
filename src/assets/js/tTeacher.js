$(document).ready(function () {
  // Use the jQuery $ function to select the elements
  const main = $('.dashboard-container__main')
  const brandBox = $('.sidebar__brand')
  const userBox = $('.sidebar__user')
  const dashboard = $('.dashboard')
  const manageAbsenteeismBtn = $('.M_absenteeism')
  const manageExams = $('.manageExams')
  const sidebarToggler = $('.navbar__toggle')

  sidebarToggler.on('click', function () {
    $('.dashBoardRoot').toggleClass('sideBarHidden')
    $('.dashboard-container__sidebar').toggleClass('toggleSidebar')
  })

  // Add event listeners to the elements
  brandBox.on('click', function () {
    // Load the content of the dashboard page into the main element
    main.load('/teacher/main/profile.ejs')
  })
  manageAbsenteeismBtn.on('click', function () {
    // Load the content of the dashboard page into the main element
    main.load('/teacher/main/manageAbsenteeism.ejs')
  })

  manageExams.on('click', function () {
    // Load the content of the dashboard page into the main element
    main.load('/teacher/main/manageExams.ejs')
  })

  window.switchLang('teacherDashboardTitle', true)
  window.switchLang('teacherAbsenceTitle', true)
  window.switchLang('teacherExamsTitle', true)
})
