import mongoose from 'mongoose'
const adminSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: [true, 'Please Provide a Full Name'],
  },
  serial_number: {
    type: String,
    required: [true, 'Please Provide a serial number'],
  },
  Email: {
    type: String,
    required: [true, 'Please Provide a Email'],
  },
  Telephone: {
    type: String,
    required: [true, 'Please Provide a Telephone'],
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
