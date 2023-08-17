import express from 'express'
import {
  getClasses,
  createClass,
  getClass,
  deleteClass,
  updateClass,
} from '../controllers/classes.js'

const router = express.Router()
router.get('/getClasses', getClasses)
router.post('/createClass', createClass)
router.get('/getClass/:id', getClass)
router.delete('/deleteClass/:id', deleteClass)
router.patch('/updateClass/:id', updateClass)
export default router
