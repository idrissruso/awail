import express from 'express'

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getUserByUsername,
} from '../controllers/users.js'

const router = express.Router()
router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.get('/getUser/:id', getUser)
router.get('/getUserByUsername/:username', getUserByUsername)
router.delete('/deleteUser/:id', deleteUser)
router.patch('/updateUser/:id', updateUser)

export default router
