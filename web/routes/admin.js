import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  console.log(req.user)
  res.render('root.ejs', { user: req.user })
})

export default router
