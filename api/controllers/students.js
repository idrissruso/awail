import Student from '../models/student.js'

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
    res.status(200).json(students)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new student
export const createStudent = async (req, res) => {
  const newStudent = new Student(req.body)

  try {
    await newStudent.save()
    res.status(201).json(newStudent)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific student by ID
export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
    if (!student) return res.status(404).json({ message: 'Student not found' })
    res.status(200).json(student)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific student by ID
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id)
    if (!student) return res.status(404).json({ message: 'Student not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific student by ID
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!student) return res.status(404).json({ message: 'Student not found' })
    res.status(200).json(student)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
