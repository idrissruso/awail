import Admin from '../models/admin.js'

// Get all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find()
    res.status(200).json(admins)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new admin
export const createAdmin = async (req, res) => {
  const newAdmin = new Admin(req.body)

  try {
    await newAdmin.save()
    res.status(201).json(newAdmin)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific admin by ID
export const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id)
    if (!admin) return res.status(404).json({ message: 'Admin not found' })
    res.status(200).json(admin)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific admin by ID
export const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id)
    if (!admin) return res.status(404).json({ message: 'Admin not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific admin by ID
export const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!admin) return res.status(404).json({ message: 'Admin not found' })
    res.status(200).json(admin)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
