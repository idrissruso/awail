import mongoose from 'mongoose'

const teacherSchema = new mongoose.Schema({
  serial_number: {
    type: String,
    required: [true, 'Please provide a serial number'],
  },
  fullName: {
    type: String,
    required: [true, 'Please provide a full name'],
  },
  contact_info: {
    email: {
      type: String,
      required: [true, 'Please provide a email'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone'],
    },
    address: {
      type: String,
      required: [true, 'Please provide a address'],
    },
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please Provide a date of birth'],
  },
  gender: {
    type: String,
    required: [true, 'Please provide a gender'],
  },
  qualification: {
    type: String,
    required: [true, 'Please provide a qualification'],
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  profileImage: { type: String },
  profileImageType: { type: String },
})

export default mongoose.models.Teacher ||
  mongoose.model('Teacher', teacherSchema)
