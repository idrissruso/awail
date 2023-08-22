import express from 'express'
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudent,
} from '../controllers/students.js'

const router = express.Router()
router.get('/getStudents', getStudents)
router.get('/getStudent/:id', getStudent)
router.post('/createStudent', createStudent)
router.patch('/updateStudent/:id', updateStudent)
router.delete('/deleteStudent/:id', deleteStudent)

export default router
