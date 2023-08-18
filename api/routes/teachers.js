import express from 'express'
import {
  getTeachers,
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teachers.js'

const router = express.Router()
router.get('/getTeachers', getTeachers)
router.post('/createTeacher', createTeacher)
router.get('/getTeacher/:id', getTeacher)
router.delete('/deleteTeacher/:id', deleteTeacher)
router.patch('/updateTeacher/:id', updateTeacher)
export default router
