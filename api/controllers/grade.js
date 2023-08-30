import grade from '../models/grade.js'
import mongoose from 'mongoose'

// Get all grades
export const getGrades = async (req, res) => {
  try {
    const grades = await grade.find()
    res.status(200).json(grades)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
export const getStudentGrades = async (req, res) => {
  try {
    const grades = await grade.find({
      student: new mongoose.Types.ObjectId(req.params.id),
    })
    res.status(200).json(grades)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new grade
export const createGrade = async (req, res) => {
  const newGrade = new grade({
    ...req.body,
    student: new mongoose.Types.ObjectId(req.body.student),
  })

  try {
    await newGrade.save()
    res.status(201).json(newGrade)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific grade by ID
export const getGrade = async (req, res) => {
  try {
    const grade = await grade.findById(req.params.id)
    if (!grade) return res.status(404).json({ message: 'grade not found' })
    res.status(200).json(grade)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific grade by ID
export const deleteGrade = async (req, res) => {
  try {
    const grade = await grade.findByIdAndDelete(req.params.id)
    if (!grade) return res.status(404).json({ message: 'grade not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific grade by ID
export const updateGrade = async (req, res) => {
  try {
    const grade_ = await grade.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!grade_) return res.status(404).json({ message: 'grade not found' })
    res.status(200).json(grade_)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
