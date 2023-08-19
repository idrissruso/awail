import Class from '../models/class.js'

// Get all classes
export const getClasses = async (req, res) => {
  try {
    const Classes = await Class.find()
    res.status(200).json(Classes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new class
export const createClass = async (req, res) => {
  const newClass = new Class(req.body)

  try {
    await newClass.save()
    res.status(201).json(newClass)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific class by ID
export const getClass = async (req, res) => {
  try {
    const class_ = await Class.findById(req.params.id)
    if (!class_) return res.status(404).json({ message: 'class not found' })
    res.status(200).json(class_)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific class by ID
export const deleteClass = async (req, res) => {
  try {
    const class_ = await Class.findByIdAndDelete(req.params.id)
    if (!class_) return res.status(404).json({ message: 'Class not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific class by ID
export const updateClass = async (req, res) => {
  try {
    const class_ = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!class_) return res.status(404).json({ message: 'Class not found' })
    res.status(200).json(class_)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
