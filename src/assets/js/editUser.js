const profileImage = document.querySelector('.form__box-img--img')
const editImage = document.querySelector('.form__box-img--caption')
const editImageInput = document.querySelector('#file')
const updateForm = document.querySelector('.form')
let imageFile

updateForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const dataAdmin = {
    name: updateForm.name.value + ' ' + updateForm.surname.value,
    email: updateForm.email.value,
    telephone: updateForm.telephone.value,
  }

  const dataUser = {
    username: updateForm.username.value,
  }

  if (imageFile) {
    const base64 = await codeImageToBase64(imageFile)
    const image = decodeBase64Image(base64)
    dataUser.profileImage = image.data
    dataUser.type = image.type
  }

  try {
    const resAdmin = await fetch('/api/editAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataAdmin),
    })
    console.log(await resAdmin.json())
  } catch (err) {
    console.log(err)
  }

  try {
    const resUser = await fetch('/api/editUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataUser),
    })
    console.log(await resUser.json())
  } catch (err) {
    console.log(err)
  }
})

editImage.addEventListener('click', () => {
  editImageInput.click()
})

editImageInput.addEventListener('change', (e) => {
  imageFile = e.target.files[0]
  const reader = new FileReader()
  reader.onload = () => {
    profileImage.src = reader.result
  }
  reader.readAsDataURL(imageFile)
})

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

const decodeBase64Image = (dataString) => {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)

  if (matches.length !== 3) {
    return new Error('Invalid input string')
  }

  return {
    type: matches[1],
    data: Buffer.from(matches[2], 'base64'),
  }
}
