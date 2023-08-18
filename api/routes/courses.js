import express from 'express'
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourse,
} from '../controllers/courses.js'

const router = express.Router()
router.get('/getCourses', getCourses)
router.get('/getCourse/:id', getCourse)
router.post('/createCourse', createCourse)
router.put('/updateCourse/:id', updateCourse)
router.delete('/deleteCourse/:id', deleteCourse)

export default router
