import Course from '../models/course.js'

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
    res.status(200).json(courses)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new course
export const createCourse = async (req, res) => {
  const newCourse = new Course(req.body)

  try {
    await newCourse.save()
    res.status(201).json(newCourse)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific course by ID
export const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) return res.status(404).json({ message: 'Course not found' })
    res.status(200).json(course)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete a specific course by ID
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id)
    if (!course) return res.status(404).json({ message: 'Course not found' })
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific course by ID
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!course) return res.status(404).json({ message: 'Course not found' })
    res.status(200).json(course)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
