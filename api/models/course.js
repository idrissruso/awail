import mongoose from 'mongoose'
import Counter from './counter.js'

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: [true, 'Please Provide a course name'],
  },
  code: {
    type: String,
  },
  credits: {
    type: Number,
    required: [true, 'Please Provide a course credits'],
  },
})

courseSchema.pre('save', async function (next) {
  const course = this
  const counter = await Counter.findOneAndUpdate(
    { _id: 'C' },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  )
  course.code = `C${counter.sequence_value.toString().padStart(3, '0')}`
  next()
})

export default mongoose.models.Course || mongoose.model('Course', courseSchema)
