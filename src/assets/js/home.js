$(document).ready(function () {
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

  addStudent.on('click', function () {
    // Load the content of the addStudent page into the main element
    main.load('main/addStudent.ejs')
  })

  brandBox.on('click', function () {
    // Load the content of the dashboard page into the main element
    main.load('main/dashboard.ejs')
  })

  manageStudent.on('click', function () {
    // Load the content of the manageStudent page into the main element
    main.load('main/manageStudent.ejs')
  })

  addUser.on('click', function () {
    // Load the content of the addUser page into the main element
    main.load('main/addUser.ejs')
  })

  dashboard.on('click', function () {
    // Load the content of the dashboard page into the main element
    main.load('main/dashboard.ejs')
  })
  // Add event listeners to other elements as needed

  //manage students page

  //const addNewStudentBtn = $('#addStudent')
  //const modifyStudentBtn = $('#modifyStudent')
  //const deleteStudentBtn = $('#deleteStudent')
  //const coursesList = $('#coursesList')

  $(document).on('click', '#addStudent', function () {
    main.load('main/addStudent.ejs')
  })
})
