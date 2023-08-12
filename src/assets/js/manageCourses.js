;(function () {
  const colors = [
    // Dark Teal
    '#2a9d8f', // Teal// Burnt Sienna
    '#374c80', // Navy Blue
  ]

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

  // Fixed query selector
  const coursesList = [
    {
      name: 'MATH',
      Enseignant: 'M. Jean',
    },
    {
      name: 'PHY',
      Enseignant: 'M. Jean Paul',
    },
  ]

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

  const displayCourses = () => {
    coursesList.forEach((course) => {
      const courseDiv = document.createElement('div')
      courseDiv.classList.add('course')
      courseDiv.innerHTML = `
        <div class="course__name">${course.name}</div>
        <div class="course__teacher">${course.Enseignant}</div>
        <div class="course__actions">
          <button class="btn btn--edit">Details</button>
        </div>
      `

      const randomColor1 = getRandomColor()
      const randomColor2 = getRandomColor()
      const randomGradient = `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`
      courseDiv.style.background = randomGradient

      const textColor = calculateContrastColor(randomColor1)
      courseDiv.style.color = textColor

      coursesDiv.appendChild(courseDiv)
    })

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
    console.log('cancel')
  })

  addNewCourseModalForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const courseName = document.querySelector('#course-name').value
    const courseTeacher =
      document.querySelector('#instructor').selectedOptions[0].value

    const course = {
      name: courseName,
      Enseignant: courseTeacher,
    }

    coursesList.push(course)

    addNewCourseModal.classList.remove('addNewCoursModal--show')
    addNewCourseModal.classList.add('addNewCoursModal--hide')
    addNewCourseContainer.classList.remove('addNewCoursContainer--animate')

    // Clear the form
    document.querySelector('#course-name').value = ''
    document.querySelector('#instructor').value = ''

    // Remove all the courses from the DOM
    coursesDiv.innerHTML = ''

    // Display the courses again
    displayCourses()
  })

  CoursDetailsCloseBtn.addEventListener('click', (event) => {
    CoursDetailsModal.classList.remove('courseDetailsModal--show')
    CoursDetailsModal.classList.add('courseDetailsModal--hide')
    CoursDetailsContainer.classList.remove(
      'courseDetailsModal__container--animate'
    )
  })

  displayCourses()
})()
