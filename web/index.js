import express from 'express'
import home from './routes/home.js'
import parent from './routes/parent.js'
import admin from './routes/admin.js'
import teacher from './routes/teacher.js'

//home page
const router = express.Router()
router.use('/', home)
router.use('/parent', parent)
router.use('/admin', admin)
router.use('/teacher', teacher)

export default router
