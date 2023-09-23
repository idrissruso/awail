import attendee from '../models/attendee.js'
import mongoose from 'mongoose'

// Get all attendees
export const getAttendees = async (req, res) => {
  try {
    const attendees = await attendee.find()
    res.status(200).json(attendees)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
export const getStudentAttendees = async (req, res) => {
  try {
    const attendees = await attendee.find({
      student: new mongoose.Types.ObjectId(req.params.id),
    })
    res.status(200).json(attendees)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new attendee
export const createAttendee = async (req, res) => {
  const newAttendee = new attendee({
    ...req.body,
    student: new mongoose.Types.ObjectId(req.body.student),
  })

  try {
    await newAttendee.save()
    res.status(201).json(newAttendee)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const createAttendees = async (req, res) => {
  try {
    const attendees = req.body.map((attendeeData) => {
      const newAttendee = new attendee({
        ...attendeeData,
        student: new mongoose.Types.ObjectId(attendeeData.student),
      })
      return newAttendee.save()
    })

    await Promise.all(attendees)
    res.status(201).json(attendees)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific attendee by ID
export const getAttendee = async (req, res) => {
  try {
    const attendee = await attendee.findById(req.params.id)
    if (!attendee)
      return res.status(404).json({ message: 'attendee not found' })
    res.status(200).json(attendee)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific attendee by ID
export const deleteAttendee = async (req, res) => {
  try {
    const attendee = await attendee.findByIdAndDelete(req.params.id)
    if (!attendee)
      return res.status(404).json({ message: 'attendee not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific attendee by ID
export const updateAttendee = async (req, res) => {
  try {
    const attendee_ = await attendee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    if (!attendee_)
      return res.status(404).json({ message: 'attendee not found' })
    res.status(200).json(attendee_)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
