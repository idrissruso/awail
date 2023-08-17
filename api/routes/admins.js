import express from 'express'
import {
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from '../controllers/admins.js'

const router = express.Router()
router.get('/getAdmins', getAdmins)
router.post('/createAdmin', createAdmin)
router.get('/getAdmin/:id', getAdmin)
router.delete('/deleteAdmin/:id', deleteAdmin)
router.patch('/updateAdmin/:id', updateAdmin)
export default router
