import express from 'express'

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getUserByUsername,
  deleteUserByRoleData,
  getUserByRoleData,
} from '../controllers/users.js'

const router = express.Router()
router.get('/getUsers', getUsers)
router.post('/createUser', createUser)
router.get('/getUser/:id', getUser)
router.get('/getUserByUsername/:username', getUserByUsername)
router.delete('/deleteUser/:id', deleteUser)
router.patch('/updateUser/:id', updateUser)
router.delete('/deleteUserByRoleData/:roleData', deleteUserByRoleData)
router.get('/getUserByRoleData/:roleData', getUserByRoleData)

export default router
