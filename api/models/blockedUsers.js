import mongoose from 'mongoose'

const blockedUsersSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
})

const BlockedUsers =
  mongoose.model('BlockedUsers', blockedUsersSchema) ||
  mongoose.models.BlockedUsers

export default BlockedUsers
