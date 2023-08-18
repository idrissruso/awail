import mongoose from 'mongoose'

const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Please provide a student'],
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: [true, 'Please provide a class'],
  },
})

export default mongoose.models.Enrollment ||
  mongoose.model('Enrollment', enrollmentSchema)
