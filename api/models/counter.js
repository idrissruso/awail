import mongoose from 'mongoose'

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 1 },
})

const Counter =
  mongoose.models.Counter || mongoose.model('Counter', counterSchema)

export default Counter
