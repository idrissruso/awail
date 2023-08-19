import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  if (req.isAuthenticated() && req.user?.role === 'Teacher') {
    return res.render('teacher/teacher.ejs', { user: req.user })
  }
  res.redirect('/')
})

export default router
