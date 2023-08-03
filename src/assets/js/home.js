// Use the jQuery $ function to select the elements
const brandBox = $('.sidebar__brand')
const userBox = $('.sidebar__user')
const dashboard = $('.dashboard')
const addStudent = $('.add-student')
const manageStudent = $('.manage-student')
const addUser = $('.add-user')
const main = $('.dashboard-container__main')

// Add event listeners to the elements
brandBox.on('click', function () {
  // Load the content of the dashboard page into the main element
  main.load('main/dashboard.ejs')
})

userBox.on('click', function () {
  // Load the content of the editUser page into the main element
  main.load('main/editUser.ejs')
})

// Add event listeners to other elements as needed
