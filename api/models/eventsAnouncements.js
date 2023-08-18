import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please provide a title'] },
  date: { type: Date, required: [true, 'Please provide a date'] },
  description: { type: String },
})

export default mongoose.models.Event || mongoose.model('Event', eventSchema)
