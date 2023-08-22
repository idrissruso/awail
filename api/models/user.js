import mongoose from 'mongoose'
import crypto from 'crypto'

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 1 },
})

const Counter = mongoose.model('Counter', counterSchema)

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['Admin', 'Teacher', 'Student', 'Parent'],
    required: true,
  },
  roleData: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'role',
    required: [true, 'please enter a user role'],
  },
  profileImage: { type: String },
  profileImageType: { type: String },
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  const hash = crypto.createHash('sha256')
  hash.update(this.password)
  this.password = hash.digest('hex')

  try {
    const roleCode = getRoleCode(this.role)
    const counter = await Counter.findOneAndUpdate(
      { _id: roleCode },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    )
    this.username = `${roleCode}${counter.sequence_value
      .toString()
      .padStart(3, '0')}`
  } catch (error) {
    return next(error)
  }

  next()
})

function getRoleCode(role) {
  switch (role) {
    case 'Admin':
      return 'A'
    case 'Teacher':
      return 'T'
    case 'Student':
      return 'S'
    case 'Parent':
      return 'P'
    default:
      return ''
  }
}

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
