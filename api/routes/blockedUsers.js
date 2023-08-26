import {
  getBlockedUsers,
  createBlockedUser,
  getBlockedUser,
  deleteBlockedUser,
} from '../controllers/blockedUsers.js'
import express from 'express'

const router = express.Router()

// Get all blockedUsers
router.get('/getBlockedUsers', getBlockedUsers)
router.get('/getBlockedUser/:id', getBlockedUser)
router.post('/createBlockedUser', createBlockedUser)
router.delete('/deleteBlockedUser/:id', deleteBlockedUser)

export default router
