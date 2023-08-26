import BlockedUsers from '../models/blockedUsers.js'
import express from 'express'

const router = express.Router()

// Get all blockedUsers
export const getBlockedUsers = async (req, res) => {
  try {
    const blockedUsers = await BlockedUsers.find()
    res.status(200).json(blockedUsers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new blockedUser
export const createBlockedUser = async (req, res) => {
  const newBlockedUser = new BlockedUsers(req.body)
  try {
    await newBlockedUser.save()
    res.status(201).json(newBlockedUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific blockedUser by ID
export const getBlockedUser = async (req, res) => {
  try {
    const blockedUser = await BlockedUsers.findById(req.params.id)
    if (!blockedUser)
      return res.status(404).json({ message: 'BlockedUser not found' })
    res.status(200).json(blockedUser)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific blockedUser by ID

export const deleteBlockedUser = async (req, res) => {
  try {
    const blockedUser = await BlockedUsers.findByIdAndDelete(req.params.id)
    if (!blockedUser)
      return res.status(404).json({ message: 'BlockedUser not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
