import express from 'express'
import getUserById from '../../utils/getUSer.js'

const router = express.Router()
router.get('/', async (req, res) => {
  if (req.isAuthenticated() && req.user?.role === 'Admin') {
    const user = await getUserById(req.user.roleData, req.user.role)
    return res.render('root.ejs', { user: req.user, admin: user }) // Pass the user object to the template
  }
  res.redirect('/')
})

export default router
