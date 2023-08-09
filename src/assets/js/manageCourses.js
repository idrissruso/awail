;(function () {
  const colors = [
    '#264653', // Dark Teal
    '#2a9d8f', // Teal// Burnt Sienna
    '#374c80',
    '#201e40',
    '#24243e', // Navy Blue
  ]

  const manageCourses = document.querySelector('.manageCourses')
  const coursesDiv = document.querySelector('.manageCourses__courses')
  const addNewCourseBtn = document.querySelector('.add-newCourse')
  const coursesList = []

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
      addNewCourse()
      coursesDiv.innerHTML = ''
      displayCourses()
    }
  })

  manageCourses.addEventListener('click', (event) => {
    if (event.target.matches('.add-newCourse, .add-newCourse *')) {
      coursesList.push({
        id: 1,
        name: 'PHS',
        Enseignant: 'New Teacher',
      })
      coursesDiv.innerHTML = ''
      displayCourses()
    }
  })

  displayCourses()
})()
