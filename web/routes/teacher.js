import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  console.log(req.user)
  res.render('teacher/teacher.ejs', { user: req.user })
})

export default router
