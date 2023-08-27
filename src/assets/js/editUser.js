;(function () {
  const profileImage = document.querySelector('.form__box-img--img')
  const editImage = document.querySelector('.form__box-img--caption')
  const editImageInput = document.querySelector('#file')
  const updateForm = document.querySelector('.form')
  let imageFile
  const urlAdmin = 'http://localhost:3000/api/updateAdmin/' + adminId
  const urlUser = 'http://localhost:3000/api/updateUser/' + userId

  // Event listener for form submission
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const dataAdmin = {
      FullName: updateForm.name.value + ' ' + updateForm.surname.value,
      Email: updateForm.email.value,
      Telephone: updateForm.phone.value,
      Role: updateForm.role.value,
    }

    const dataUser = {
      username: updateForm.userName.value,
    }

    if (imageFile) {
      const base64 = await codeImageToBase64(imageFile)
      dataUser.profileImage = base64
      dataUser.profileImageType = imageFile.type
    }

    const commonHeaders = {
      'Content-Type': 'application/json',
    }

    let adminUpdated = false
    let userUpdated = false

    try {
      const resAdmin = await fetch(urlAdmin, {
        method: 'PATCH',
        headers: commonHeaders,
        body: JSON.stringify(dataAdmin),
      })
      adminUpdated = resAdmin.ok
    } catch (err) {
      console.log('Error updating admin:', err)
    }

    try {
      const resUser = await fetch(urlUser, {
        method: 'PATCH',
        headers: commonHeaders,
        body: JSON.stringify(dataUser),
      })
      userUpdated = resUser.ok
    } catch (err) {
      console.log('Error updating user:', err)
    }

    if (adminUpdated && userUpdated) {
      alert('Profile updated successfully!')
      location.reload()
    }
  })

  // Event listener for clicking the image caption
  editImage.addEventListener('click', () => {
    editImageInput.click()
  })

  // Event listener for image selection
  editImageInput.addEventListener('change', (e) => {
    imageFile = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      profileImage.src = reader.result
    }
    reader.readAsDataURL(imageFile)
  })

  // Utility function to convert image to base64
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

  // Display profile image if available
  console.log(loggedInUser.username)
  if (loggedInUser.profileImage) {
    profileImage.src = `data:${loggedInUser.profileImageType};base64,${loggedInUser.profileImage}`
  }
})()
