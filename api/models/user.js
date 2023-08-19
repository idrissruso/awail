import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import crypto from 'crypto'

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

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  const hash = crypto.createHash('sha256')
  hash.update(this.password)
  this.password = hash.digest('hex')
  next()
})

export default mongoose.models.User || mongoose.model('User', userSchema)
