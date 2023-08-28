import express from 'express'
import getUserById from '../../utils/getUSer.js'

const router = express.Router()
router.get('/', async (req, res) => {
  if (req.isAuthenticated() && req.user?.role === 'Teacher') {
    const loggedInTeacher = await getUserById(req.user.roleData, req.user.role)
    return res.render('teacher/teacher.ejs', {
      teacher: req.user,
      loggedInTeacher: loggedInTeacher,
    })
  }
  res.redirect('/')
})

export default router
