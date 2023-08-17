import express from 'express'
import users from './routes/users.js'

const router = express.Router()

router.use('/', users)

export default router
