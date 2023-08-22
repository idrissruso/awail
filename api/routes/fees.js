import {
  getAllFees,
  getFeeById,
  createFee,
  updateFee,
  deleteFee,
  getStudentFees,
} from '../controllers/fees.js'
import express from 'express'

const router = express.Router()
router.get('/getAllFees', getAllFees)
router.get('/getFee/:id', getFeeById)
router.post('/createFee', createFee)
router.patch('/updateFee/:id', updateFee)
router.delete('/deleteFee/:id', deleteFee)
router.get('/getStudentFees/:id', getStudentFees)
export default router
