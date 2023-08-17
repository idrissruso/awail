import mongoose from 'mongoose'

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
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  profileImage: {
    type: String,
  },
})

export default mongoose.models.User || mongoose.model('User', userSchema)
