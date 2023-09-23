import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Please provide a student'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent'],
    required: [true, 'Please provide a status'],
  },
  explanation: {
    type: String,
    enum: ['Justified', 'Non-Justified'],
  },
})

attendanceSchema.index({ student: 1, date: 1 }, { unique: true })

const Attendance =
  mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema)

// Recreate the index
Attendance.collection.createIndex(
  { student: 1, date: 1 },
  { unique: true },
  function (err, result) {
    if (err) {
      console.log('Error in creating index!', err)
    }
  }
)

export default Attendance
