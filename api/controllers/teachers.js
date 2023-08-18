import Teacher from '../models/teacher.js'

// Get all teachers
export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find()
    res.status(200).json(teachers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new teacher
export const createTeacher = async (req, res) => {
  const newTeacher = new Teacher(req.body)

  try {
    await newTeacher.save()
    res.status(201).json(newTeacher)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific teacher by ID
export const getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' })
    res.status(200).json(teacher)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific teacher by ID
export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id)
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific teacher by ID
export const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' })
    res.status(200).json(teacher)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
