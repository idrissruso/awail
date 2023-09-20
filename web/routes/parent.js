import express from 'express'
import getUserById from '../../utils/getUSer.js'

const router = express.Router()
router.get('/', async (req, res) => {
  if (req.isAuthenticated() && req.user?.role === 'Parent') {
    const loggedInParent = await getUserById(req.user.roleData, req.user.role)
    return res.render('parent/parent.ejs', {
      user: req.user,
      loggedInUser: loggedInParent,
    })
  }
  res.redirect('/')
})
export default router
