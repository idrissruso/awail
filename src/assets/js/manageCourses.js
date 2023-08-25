;(function () {
  const colors = [
    // Dark Teal
    '#2a9d8f', // Teal// Burnt Sienna
    '#374c80',
    // Navy Blue
  ]
  const getCoursesUrl = 'http://localhost:3000/api/getCourses'
  const createCourseUrl = 'http://localhost:3000/api/createCourse'
  const getTeachersUrl = 'http://localhost:3000/api/getTeachers'
  const getTeacherByIdUrl = 'http://localhost:3000/api/getTeacher/'
  const manageCourses = document.querySelector('.manageCourses')
  const coursesDiv = document.querySelector('.manageCourses__courses')
  const addNewCourseBtn = document.querySelector('.add-newCourse')
  const addNewCourseModal = document.querySelector('.addNewCoursModal')
  const addNewCourseContainer = document.querySelector(
    '.addNewCoursModal__container'
  )
  const addNewCourseModalCloseBtn = document.querySelector(
    '.addNewCoursModal__btn--cancel'
  )
  const addNewCourseModalForm = document.querySelector(
    '.addNewCoursModal__form'
  )

  const CoursDetailsBtn = document.querySelector('.btn--edit')
  const CoursDetailsCloseBtn = document.querySelector('.cancel')
  const CoursDetailsContainer = document.querySelector(
    '.courseDetailsModal__container'
  )
  const CoursDetailsModal = document.querySelector('.courseDetailsModal')
  const selectTeacher = document.querySelector('#instructor')
  const editBtn = document.querySelector('#editBtn')
  const deleteBtn = document.querySelector('#deleteBtn')

  let coursesList = []

  // Get all courses from the database
  const getCourses = async () => {
    try {
      const response = await fetch(getCoursesUrl)
        .then((res) => res.json())
        .then((data) => {
          coursesList = [...data]
        })
    } catch (err) {
      alert('une erreur est survenue')
      console.error(err)
    }
  }

  const getTeacherById = async (id) => {
    try {
      const response = await fetch(getTeacherByIdUrl + id)
        .then((res) => res.json())
        .then((data) => {
          return data
        })
      return response
    } catch (err) {
      alert('une erreur est survenue')
      console.error(err)
    }
  }

  // Get all teachers from the database
  const getTeachers = async () => {
    try {
      const response = await fetch(getTeachersUrl)
        .then((res) => res.json())
        .then((data) => {
          teachersList = [...data]
          data.forEach((teacher) => {
            const option = document.createElement('option')
            option.value = teacher._id
            option.textContent = teacher.fullName
            selectTeacher.appendChild(option)
          })
        })
    } catch (err) {
      alert('une erreur est survenue')
      console.error(err)
    }
  }

  const addNewCourse = async (course) => {
    try {
      const response = await fetch(createCourseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      })
    } catch (err) {
      alert('une erreur est survenue')
      console.error(err)
    }
  }

  // Fixed query selector

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const calculateContrastColor = (backgroundColor) => {
    const getLuminance = (color) => {
      const rgb = parseInt(color.slice(1), 16)
      const r = (rgb >> 16) & 0xff
      const g = (rgb >> 8) & 0xff
      const b = (rgb >> 0) & 0xff

      const luminance = 0.299 * r + 0.587 * g + 0.114 * b
      return luminance
    }

    const luminance = getLuminance(backgroundColor)

    // Choose text color based on luminance and contrast
    return luminance > 128 ? '#333' : '#fff'
  }

  const displayCourses = async () => {
    await getCourses()
    for (const course of coursesList) {
      const courseDiv = document.createElement('div')
      courseDiv.classList.add('course')
      let teacherName = 'teacher'
      if (course.teacher) {
        try {
          const teacherData = await getTeacherById(course.teacher)
          console.log(teacherData)
          teacherName = teacherData.fullName
        } catch (err) {
          console.error(err)
        }
      }

      console.log(teacherName)

      courseDiv.innerHTML = `
        <div class="course__name">${course.course_name}</div>
        <div class="course__teacher">${teacherName}</div>
        <div class="course__actions">
          <button class="btn btn--edit" data-id="${course._id}">Details</button>
        </div>
      `

      const randomColor1 = getRandomColor()
      const randomColor2 = getRandomColor()
      const randomGradient = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`
      courseDiv.style.background = randomGradient

      const textColor = calculateContrastColor(randomColor1)
      courseDiv.style.color = textColor

      coursesDiv.appendChild(courseDiv)
    }

    // Add the "Add new" div element as the last child of coursesDiv
    const addNewDiv = document.createElement('div')
    addNewDiv.classList.add('course', 'add-newCourse')
    addNewDiv.innerHTML = `
      <div class="course__icon">
        <svg class="course__icon-svg">
          <use xlink:href="#icon-plus-square"></use>
        </svg>
      </div>
    `

    coursesDiv.appendChild(addNewDiv)
  }

  manageCourses.addEventListener('click', (event) => {
    if (event.target.matches('.add-newCourse, .add-newCourse *')) {
      addNewCourseModal.classList.add('addNewCoursModal--show')
      addNewCourseModal.classList.remove('addNewCoursModal--hide')
      addNewCourseContainer.classList.add('addNewCoursContainer--animate')
      getTeachers()
    } else if (event.target.matches('.btn--edit, .btn--edit *')) {
      CoursDetailsModal.classList.add('courseDetailsModal--show')
      CoursDetailsModal.classList.remove('courseDetailsModal--hide')
      CoursDetailsContainer.classList.add(
        'courseDetailsModal__container--animate'
      )
    }
  })

  addNewCourseModalCloseBtn.addEventListener('click', (event) => {
    addNewCourseModal.classList.remove('addNewCoursModal--show')
    addNewCourseModal.classList.add('addNewCoursModal--hide')
    addNewCourseContainer.classList.remove('addNewCoursContainer--animate')
  })

  addNewCourseModalForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const courseName = document.querySelector('#course-name').value
    const courseTeacher =
      document.querySelector('#instructor').selectedOptions[0].value

    const course = {
      course_name: courseName,
      teacher: courseTeacher,
    }

    addNewCourse(course)

    addNewCourseModal.classList.remove('addNewCoursModal--show')
    addNewCourseModal.classList.add('addNewCoursModal--hide')
    addNewCourseContainer.classList.remove('addNewCoursContainer--animate')

    // Clear the form
    document.querySelector('#course-name').value = ''
    document.querySelector('#instructor').value = ''

    // Remove all the courses from the DOM
    coursesDiv.innerHTML = ''

    // Display the courses again
    getCourses()
      .then(() => {
        console.log(coursesList)
        displayCourses()
      })
      .catch((err) => {
        console.error(err)
      })
  })

  CoursDetailsCloseBtn.addEventListener('click', (event) => {
    CoursDetailsModal.classList.remove('courseDetailsModal--show')
    CoursDetailsModal.classList.add('courseDetailsModal--hide')
    CoursDetailsContainer.classList.remove(
      'courseDetailsModal__container--animate'
    )
  })

  getCourses()
    .then(() => {
      displayCourses()
    })
    .catch((err) => {
      console.error(err)
    })

  deleteBtn.addEventListener('click', (event) => {})
})()
