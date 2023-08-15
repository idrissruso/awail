'use strict'

$(document).ready(function () {
  // Use the jQuery $ function to select the elements
  const main = $('.dashboard-container__main')
  const brandBox = $('.sidebar__brand')
  const userBox = $('.sidebar__user')
  const dashboard = $('.dashboard')
  const manageAbsenteeismBtn = $('.M_absenteeism')
  const manageExams = $('.manageExams')

  // Add event listeners to the elements
  brandBox.on('click', function () {
    // Load the content of the dashboard page into the main element
    main.load('/teacher/main/profile.ejs')
  })
  manageAbsenteeismBtn.on('click', function () {
    // Load the content of the dashboard page into the main element
    main.load('/teacher/main/manageAbsenteeism.ejs')
  })

  //userBox.on('click', function () {
  //  // Load the content of the editUser page into the main element
  //  main.load('main/editUser.ejs')
  //})
  //
  //dashboard.on('click', function () {
  //  // Load the content of the dashboard page into the main element
  //  main.load('main/dashboard.ejs')
  //})
  //

  //
  //manageExams.on('click', function () {
  //  main.load('teacher/main/manageExams.ejs')
  //})
  //// Add event listeners to other elements as needed
  ////manage students page
  //
  ////const addNewStudentBtn = $('#addStudent')
  ////const modifyStudentBtn = $('#modifyStudent')
  ////const deleteStudentBtn = $('#deleteStudent')
  ////const coursesList = $('#coursesList')
  //
  //$(document).on('click', '#addStudent', function () {
  //  main.load('main/addStudent.ejs')
  //})

  //$(document).on('click', '.dashboard__card-button', function () {
  //  main.load('main/manageStudent.ejs')
  //})

  //$(document).on('click', '.manage-teachers', function () {
  //  main.load('main/manageTeachers.ejs')
  //})
})
