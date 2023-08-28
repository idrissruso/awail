;(function () {
  const tBody = document.querySelector('#teachers__tBody')

  const addNewTeacherBtn = document.querySelector('#addTeacher')
  const addNewTeacherPopUp = document.querySelector('.addNewTeacher')
  const addNewTeacherForm = document.querySelector('.addNewTeacher-form')
  const addNewTeacherCancelBtn = document.querySelector(
    '.addNewTeacher-form__btn-cancel'
  )
  const addNewTeacherContainer = document.querySelector(
    '.addNewTeacher__container'
  )

  const getTeachersUrl = 'http://localhost:3000/api/getTeachers'
  let teachers = []
  const searchInput = document.querySelector('#teacher')
  const profileImageInput = document.querySelector('#profileImg')
  let profileImage
  let teacherId

  // Event listeners

  profileImageInput.addEventListener('change', (e) => {
    profileImage = e.target.files[0]
  })

  async function fetchCourses() {
    try {
      const response = await fetch('http://localhost:3000/api/getCourses') // Replace with your API endpoint
      const courses = await response.json()
      return courses
    } catch (error) {
      console.error('Error fetching courses:', error)
      return []
    }
  }

  const codeImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onload = () => {
        const base64EncodedData = reader.result.split(',')[1]
        resolve(base64EncodedData)
      }

      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(file)
    })
  }
  // Function to populate course options
  function populateCourseOptions(courses) {
    const courseSelect = document.getElementById('teacher-subjects')

    // Clear existing options
    courseSelect.innerHTML = ''

    // Add a default option
    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.textContent = 'Select a subject'
    courseSelect.appendChild(defaultOption)

    // Populate with fetched courses
    courses.forEach((course) => {
      const option = document.createElement('option')
      option.value = course._id // Assuming course._id is the MongoDB ObjectId
      option.textContent = course.course_name // Adjust the property based on your course data structure
      courseSelect.appendChild(option)
    })
  }

  addNewTeacherBtn.addEventListener('click', function () {
    addNewTeacherPopUp.classList.add('addNewTeacher-show')
    addNewTeacherPopUp.classList.remove('addNewTeacher-hide')
    addNewTeacherContainer.classList.add('addNewTeacher-animate')
    fetchCourses().then((courses) => populateCourseOptions(courses))
  })

  addNewTeacherCancelBtn.addEventListener('click', function () {
    addNewTeacherPopUp.classList.remove('addNewTeacher-show')
    addNewTeacherPopUp.classList.add('addNewTeacher-hide')
    addNewTeacherContainer.classList.remove('addNewTeacher-animate')
  })

  const getTeachers = async () => {
    try {
      const response = await fetch(getTeachersUrl)
      const data = await response.json()
      teachers = data
      updateTable(teachers)
    } catch (err) {
      console.log(err)
    }
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase()
    const filteredTeachers = teachers.filter((teacher) =>
      teacher.fullName.toLowerCase().includes(searchValue)
    )
    updateTable(filteredTeachers)
  })

  function displayImg(teacher) {
    return teacher.profileImage
      ? `data:${teacher.profileImageType};charset=utf-8;base64,${teacher.profileImage}`
      : 'profile.png'
  }

  const updateTable = (teachers) => {
    // Clear the table
    tBody.innerHTML = ''
    // Add the filtered teachers to the table
    teachers.forEach((teacher, index) => {
      let row = `<tr class="manageTeachers__row manageTeachers__row-content">
            <td class="manageTeachers__cell">${index + 1}</td>
            <td class="manageTeachers__cell">
              <img
                src="${displayImg(teacher)}"
                alt="Enseignant 1"
                class="manageTeachers__img"
              />
            </td>
            <td class="manageTeachers__cell">${teacher.serial_number}</td>
            <td class="manageTeachers__cell">${teacher.fullName}</td>
            <td class="manageTeachers__cell">${formatDate(
              teacher.dateOfBirth
            )}</td>
            <td class="manageTeachers__cell">${teacher.contact_info.phone}</td>
            <td class="manageTeachers__cell">${teacher.contact_info.email}</td>
            <td class="manageTeachers__cell">${
              teacher.contact_info.address
            }</td>
            <td class="manageTeachers__cell">${teacher.qualification}</td>
            <td class="manageTeachers__cell">
              <svg class="manageTeachers__btn--modify" data-teacher = "${
                teacher._id
              }">
                <use xlink:href="#icon-edit" data-teacher = "${
                  teacher._id
                }"></use>
              </svg>
              <svg class="manageTeachers__btn--remove deleteTeacherBtn" data-teacher = "${
                teacher._id
              }">
                <use xlink:href="#icon-bin2" class = "bin" data-teacher = "${
                  teacher._id
                }"></use>
              </svg>
            </td>
          </tr>`
      tBody.insertAdjacentHTML('beforeend', row)
    })
  }

  getTeachers()

  addNewTeacherForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(addNewTeacherForm)
    const teacherData = {
      serial_number: formData.get('teacher-no'),
      fullName: formData.get('teacher-name'),
      contact_info: {
        email: formData.get('teacher-email'),
        phone: formData.get('teacher-phone'),
        address: formData.get('teacher-address'),
      },
      dateOfBirth: formData.get('teacher-age'),
      gender: formData.get('teacher-sex'),
      qualification: formData.get('teacher-qualification'),
      profileImage: profileImage
        ? await codeImageToBase64(profileImage)
        : undefined,
      profileImageType: profileImage ? profileImage.type : undefined,
      course: formData.get('teacher-subjects'),
    }

    try {
      const response = await fetch('http://localhost:3000/api/createTeacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherData),
      })

      if (response.ok) {
        const teacher = await response.json()

        // Now, create a user for the teacher
        const userData = {
          username: teacher.serial_number, // Auto-generated username
          password: teacher.serial_number, // Using serial number as password for simplicity
          role: 'Teacher',
          roleData: teacher._id,
          profileImage: profileImage
            ? await codeImageToBase64(profileImage)
            : undefined,
          profileImageType: profileImage ? profileImage.type : undefined, // Assuming teacher._id is the MongoDB ObjectId
        }

        const userResponse = await fetch(
          'http://localhost:3000/api/createUser',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          }
        )
        const userRes = await userResponse.json()
        console.log(userRes)

        if (userResponse.ok) {
          // User created successfully
          alert('Teacher added successfully')
          document.location.reload()
          // Reset the form
        } else {
          alert('Failed to add teacher')
        }
      } else {
        alert('Failed to add teacher')
      }
    } catch (error) {
      alert('Failed to add teacher')
    }
  })
})()
