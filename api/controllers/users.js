import User from '../models/user.js' // Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body)

  try {
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get a specific user by username
// Get a specific user by username
export const getUserByUsername = async (req, res) => {
  const username = req.params.username

  try {
    const user = await User.findOne({ username: username })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific user by ID
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific user by ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
export const deleteUserByRoleData = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ roleData: req.params.roleData })
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(204).json(user)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
