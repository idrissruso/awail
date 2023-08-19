import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  if (req.isAuthenticated() && req.user?.role === 'Parent') {
    return res.render('parent/parent.ejs', { user: req.user })
  }
  res.redirect('/')
})
export default router
