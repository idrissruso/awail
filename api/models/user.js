import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['Admin', 'Teacher', 'Student', 'Parent'],
    required: true,
  },
  roleData: {
    type: Schema.Types.ObjectId,
    refPath: 'role',
  },

  profileImage: {
    type: String,
  },
})

export default mongoose.models.User || mongoose.model('User', userSchema)
