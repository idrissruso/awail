import mongoose from 'mongoose'
const classSchema = new mongoose.Schema({
  class_name: {
    type: String,
    required: [true, 'Please Provide a class name'],
  },
  class_schedule: [String],
})

export default mongoose.models.Class || mongoose.model('Class', classSchema)
