import mongoose from 'mongoose'
const feeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Please provide a student'],
  },
  month: { type: String, required: [true, 'Please provide month'] },
  amount: { type: Number, required: [true, 'Please provide amount'] },
  payment_date: { type: Date, default: Date.now },
})

export default mongoose.models.Fee || mongoose.model('Fee', feeSchema)
