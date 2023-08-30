import mongoose from 'mongoose'

const gradeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Please provide a student'],
    unique: true,
  },
  exam: {
    type: String,
    enum: ['Exam 1', 'Exam 2', 'Exam 3'],
    required: [true, 'Please provide an exam'],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Please provide a course'],
  },
  marks: { type: Number, min: 0, max: 20 },
})

gradeSchema.index({ student: 1, exam: 1 }, { unique: true })

export default mongoose.models.Grade || mongoose.model('Grade', gradeSchema)
