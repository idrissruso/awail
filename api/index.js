import express from 'express'
import users from './routes/users.js'
import classes from './routes/classes.js'
import students from './routes/students.js'
import courses from './routes/courses.js'
import teachers from './routes/teachers.js'
import admins from './routes/admins.js'
import fees from './routes/fees.js'
import attendee from './routes/attendee.js'
import blockedUsers from './routes/blockedUsers.js'
import grade from './routes/grade.js'
import horaire from './models/horaire.js'
const router = express.Router()

router.use('/', users)
router.use('/', classes)
router.use('/', students)
router.use('/', courses)
router.use('/', teachers)
router.use('/', admins)
router.use('/', fees)
router.use('/', attendee)
router.use('/', blockedUsers)
router.use('/', grade)
router.use('/', horaire)

export default router
