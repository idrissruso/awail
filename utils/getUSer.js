import axios from 'axios'

const getUserById = async (id, role) => {
  return await axios
    .get(`https://awail.onrender.com/api/get${role}/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export default getUserById
