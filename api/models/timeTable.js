import mongoose from 'mongoose'
const timetableSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: [true, 'Please provide a class'],
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: [true, 'Please provide a teacher'],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Please provide a course'],
  },
  schedule: [{ day: String, time: String }],
})

export default mongoose.models.TimeTable ||
  mongoose.model('TimeTable', timetableSchema)
