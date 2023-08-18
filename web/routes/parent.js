import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  res.render('parent/parent.ejs', { user: req.user })
})
export default router
