import express from 'express'

const router = express.Router()
router.get('/', (req, res) => {
  res.render('root.ejs')
})

export default router
