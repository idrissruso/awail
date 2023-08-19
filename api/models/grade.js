import mongoose from 'mongoose'

const gradeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Please provide a student'],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Please provide a course'],
  },
  marks: [{ type: Number, min: 0, max: 100 }],
  grade_date: { type: Date, default: Date.now },
})

export default mongoose.models.Grade || mongoose.model('Grade', gradeSchema)
