import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: [true, 'Please Provide a course name'],
  },
  instructor_name: {
    type: String,
    required: [true, 'Please Provide a instructor name'],
  },
})

export default mongoose.models.Course || mongoose.model('Course', courseSchema)
