;(function () {
  const colors = [
    // Dark Teal
    '#2a9d8f', // Teal// Burnt Sienna
    '#374c80',
    // Navy Blue
  ]

  window.switchLang('manageCoursesHeading')
  window.switchLang('addNewCoursModalHeading')
  window.switchLang('courseDetailsModalHeading')
  window.switchLang('courseNameLabel')
  window.switchLang('creditsLabel')
  window.switchLang('CourseCancelButton')
  window.switchLang('addButton')
  window.switchLang('addNewCoursModalSubmit')

  const baseUrl = window.API_URLS.apiUrl
  const getCoursesUrl = `${baseUrl}getCourses`
  const createCourseUrl = `${baseUrl}createCourse`
  const getTeacherByIdUrl = `${baseUrl}getTeacher/`
  const getCourseByIdUrl = `${baseUrl}getCourse/`
  const deleteCourseByIdUrl = `${baseUrl}deleteCourse/`
  const updateCoursUrl = `${baseUrl}updateCourse/`
  const manageCourses = document.querySelector('.manageCourses')
  const coursesDiv = document.querySelector('.manageCourses__courses')
  const submitBtn = document.querySelector('.addNewCoursModal__btn--add')
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

  const CoursDetailsContainer = document.querySelector(
    '.courseDetailsModal__container'
  )
  const CoursDetailsModal = document.querySelector('.courseDetailsModal')

  const detail = document.querySelector(
    '.courseDetailsModal__container-content'
  )
  const spinner = document.querySelector('#spinner')

  let editCourseId
  let coursesList = []

  // Get all courses from the database
  const getCourses = async () => {
    try {
      const response = await fetch(getCoursesUrl)
        .then((res) => res.json())
        .then((data) => {
          coursesList = [...data]
          spinner.style.display = 'none'
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

  // delete course by id

  const deleteCourseById = async (id) => {
    spinner.style.display = 'flex'
    try {
      const response = await fetch(deleteCourseByIdUrl + id, {
        method: 'DELETE',
      })
      if (response.ok) {
        alert('le cours a été supprimé avec succès')
      }
    } catch (err) {
      alert('une erreur est survenue')
      console.error(err)
    }
  }

  // Get all teachers from the database

  const addNewCourse = async (course) => {
    spinner.style.display = 'flex'
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

  const updateCourse = async (course, id) => {
    spinner.style.display = 'flex'
    try {
      const response = await fetch(updateCoursUrl + id, {
        method: 'PUT',
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

  const displayCourseDetails = async (id) => {
    try {
      const response = await fetch(getCourseByIdUrl + id)
        .then((res) => res.json())
        .then(async (data) => {
          detail.innerHTML = `<div class="courseDetailsModal__info">
    <p><span class="infoLabel" id="courseIdLabel">Id du cours :</span> ${
      data.code
    }</p>
    <p><span class="infoLabel" id="courseTitleLabel">Titre du cours :</span> ${
      data.course_name
    }</p>
    <p><span class="infoLabel" id="instructorLabel">Instructeur :</span> ${await getTeacherById(
      data.teacher
    ).then((data) => data.fullName)}</p>
    <p><span class="infoLabel" id="creditsLabel2">Crédits :</span> ${
      data.credits
    }</p> 
</div>
<div class="courseDetailsModal__actions">
    <button class="actionButton edit" id="coursEditBtn" data-id="${id}">Modifier</button>
    <button class="actionButton delete" id="coursDeleteBtn" data-id="${id}">Supprimer</button>
    <button class="actionButton cancel" id="coursCancelBtn" data-id="${id}">Annuler</button>
</div>
`
        })
    } catch (err) {
      alert('une erreur est survenue')
      console.error(err)
    } finally {
      spinner.style.display = 'none'
      window.switchLang('courseIdLabel')
      window.switchLang('courseTitleLabel')
      window.switchLang('instructorLabel')
      window.switchLang('creditsLabel2')
      window.switchLang('coursEditBtn')
      window.switchLang('coursDeleteBtn')
      window.switchLang('coursCancelBtn')
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
          teacherName = teacherData.fullName
        } catch (err) {
          console.error(err)
        }
      } else {
        teacherName = "Pas d'instructeur attribué"
      }

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
    } else if (event.target.matches('.btn--edit, .btn--edit *')) {
      CoursDetailsModal.classList.add('courseDetailsModal--show')
      CoursDetailsModal.classList.remove('courseDetailsModal--hide')
      CoursDetailsContainer.classList.add(
        'courseDetailsModal__container--animate'
      )
      spinner.style.display = 'flex'
      displayCourseDetails(event.target.dataset.id)
    }
  })

  detail.addEventListener('click', (event) => {
    if (event.target.matches('.cancel, .cancel *')) {
      CoursDetailsModal.classList.remove('courseDetailsModal--show')
      CoursDetailsModal.classList.add('courseDetailsModal--hide')
      CoursDetailsContainer.classList.remove(
        'courseDetailsModal__container--animate'
      )
    } else if (event.target.matches('.edit, .edit *')) {
      submitBtn.textContent = 'Modifier'
      selectTeacher.innerHTML = ''
      editCourseId = event.target.dataset.id
      CoursDetailsModal.classList.remove('courseDetailsModal--show')
      CoursDetailsModal.classList.add('courseDetailsModal--hide')
      CoursDetailsContainer.classList.remove(
        'courseDetailsModal__container--animate'
      )
      addNewCourseModal.classList.add('addNewCoursModal--show')
      addNewCourseModal.classList.remove('addNewCoursModal--hide')
      addNewCourseContainer.classList.add('addNewCoursContainer--animate')
    } else if (event.target.matches('.delete, .delete *')) {
      const id = event.target.dataset.id
      deleteCourseById(id)
      //reload the page
      location.reload()
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
    const courseCredits = document.querySelector('#credits').value

    const course = {
      course_name: courseName,
      credits: courseCredits,
    }

    const action = submitBtn.textContent
    if (action === 'Modifier') {
      const id = editCourseId
      updateCourse(course, id)
    } else if (action === 'Ajouter') {
      addNewCourse(course)
    }

    addNewCourseModal.classList.remove('addNewCoursModal--show')
    addNewCourseModal.classList.add('addNewCoursModal--hide')
    addNewCourseContainer.classList.remove('addNewCoursContainer--animate')

    // Clear the form
    document.querySelector('#course-name').value = ''

    // Remove all the courses from the
    coursesDiv.innerHTML = ''

    // Display the courses again
    getCourses()
      .then(() => {
        displayCourses()
      })
      .catch((err) => {
        console.error(err)
      })
  })

  getCourses()
    .then(() => {
      displayCourses()
    })
    .catch((err) => {
      console.error(err)
    })
})()
