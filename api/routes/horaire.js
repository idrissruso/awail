import express from 'express'
import {
  getHoraires,
  createHoraire,
  updateHoraire,
  deleteHoraire,
  getHoraire,
} from '../controllers/horaire.js'

const router = express.Router()
router.get('/getHoraires', getHoraires)
router.get('/getHoraire/:id', getHoraire)
router.post('/createHoraire', createHoraire)
router.put('/updateHoraire/:id', updateHoraire)
router.delete('/deleteHoraire/:id', deleteHoraire)

export default router
