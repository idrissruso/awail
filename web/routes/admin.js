import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  res.render('root.ejs', { user: req.user })
})

export default router
