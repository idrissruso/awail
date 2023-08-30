import {
  getGrades,
  getGrade,
  createGrade,
  updateGrade,
  deleteGrade,
  getStudentGrades,
} from '../controllers/grade.js'
import express from 'express'

const router = express.Router()
router.get('/getGrades', getGrades)
router.get('/getGrade/:id', getGrade)
router.post('/createGrade', createGrade)
router.patch('/updateGrade/:id', updateGrade)
router.delete('/deleteGrade/:id', deleteGrade)
router.get('/getStudentGrades/:id', getStudentGrades)
export default router
