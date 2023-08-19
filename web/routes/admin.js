import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  if (req.isAuthenticated() && req.user?.role === 'Admin') {
    return res.render('root.ejs', { user: req.user }) // Pass the user object to the template
  }
  res.redirect('/')
})

export default router
