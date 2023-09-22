import Horaire from '../models/horaire.js'
import Class from '../models/class.js'
import mongoose from 'mongoose'

// Get all horaires
export const getHoraires = async (req, res) => {
  try {
    const horaires = await Horaire.find()
    res.status(200).json(horaires)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new horaire
export const createHoraire = async (req, res) => {
  const newHoraire = new Horaire(req.body)

  try {
    await newHoraire.save()
    res.status(201).json(newHoraire)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific horaire by ID
export const getHoraire = async (req, res) => {
  try {
    const horaire = await Horaire.findById(req.params.id)
    if (!horaire) return res.status(404).json({ message: 'Horaire not found' })
    res.status(200).json(horaire)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific horaire by ID
export const deleteHoraire = async (req, res) => {
  try {
    const horaire = await Horaire.findByIdAndDelete(req.params.id)
    if (!horaire) return res.status(404).json({ message: 'Horaire not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific horaire by ID
export const updateHoraire = async (req, res) => {
  try {
    const horaire = await Horaire.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!horaire) return res.status(404).json({ message: 'Horaire not found' })
    res.status(200).json(horaire)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const getHorairesByClass = async (req, res) => {
  try {
    const horaires = await Horaire.find({
      class: new mongoose.Types.ObjectId(req.params.id),
    })
    console.log(req.params.id)
    if (!horaires)
      return res.status(404).json({ message: 'Horaires not found' })
    res.status(200).json(horaires)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
