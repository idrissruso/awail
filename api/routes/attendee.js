import {
  getAttendees,
  getAttendee,
  createAttendee,
  updateAttendee,
  deleteAttendee,
  getStudentAttendees,
  createAttendees,
} from '../controllers/attendee.js'
import express from 'express'

const router = express.Router()
router.get('/getAttendees', getAttendees)
router.get('/getAttendee/:id', getAttendee)
router.post('/createAttendee', createAttendee)
router.patch('/updateAttendee/:id', updateAttendee)
router.delete('/deleteAttendee/:id', deleteAttendee)
router.get('/getStudentAttendees/:id', getStudentAttendees)
router.post('/createAttendees', createAttendees)
export default router
