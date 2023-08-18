import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.ejs', { message: false })
})

// POST route with Passport.js authentication
router.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: '/',
  }),
  async (req, res, next) => {
    console.log(req.body) // This function will execute after authentication (if successful)
    // You can add your POST request handling logic here
    try {
      if (req.isAuthenticated()) {
        // Only execute this block if the user is authenticated
        // Add your custom POST request handling logic here
        res.send('POST request handled successfully.')
      } else {
        res.send('User is not authenticated.')
      }
    } catch (error) {
      next(error)
    }
  }
)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

export default router

//const getUser = (username) => {
//  return axios
//    .get('http://localhost:3000/api/getUserByUsername/' + username)
//    .then((response) => {
//      console.log(response.data)
//      return response.data
//    })
//    .catch((error) => {
//      if (error.response && error.response.status === 404) {
//        // Handle case where user was not found
//        return null
//      } else {
//        // Handle any other errors here
//        console.error(error)
//      }
//      return null
//    })
//}
