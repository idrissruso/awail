import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    required: [true, 'Please Provide a gender'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Please Provide a date of birth'],
  },

  parent: {
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
    },
    profession: {
      type: String,
      required: [true, 'Please provide a profession'],
    },
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  },
})

export default mongoose.models.Student ||
  mongoose.model('Student', StudentSchema)
