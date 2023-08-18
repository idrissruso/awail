import mongoose from 'mongoose'
const adminSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: [true, 'Please Provide a Full Name'],
  },
  Email: {
    type: String,
    required: [true, 'Please Provide a Email'],
  },
  Role: {
    type: String,
    required: [true, 'Please Provide a Role'],
  },
  gender: {
    type: String,
    required: [true, 'Please provide a gender'],
  },
})

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema)
