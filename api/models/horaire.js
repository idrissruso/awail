import mongoose from 'mongoose'

const horaireSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: [true, 'Please provide a class'],
  },
  schedule: [
    {
      time: {
        type: String,
        required: [true, 'Please provide a time'],
      },
      Lundi: {
        type: String,
        required: [true, 'Please provide a Lundi'],
      },
      Mardi: {
        type: String,
        required: [true, 'Please provide a Mardi'],
      },
      Mercredi: {
        type: String,
        required: [true, 'Please provide a Mercredi'],
      },
      Jeudi: {
        type: String,
        required: [true, 'Please provide a Jeudi'],
      },
      Vendredi: {
        type: String,
        required: [true, 'Please provide a Vendredi'],
      },
      Samedi: {
        type: String,
        required: [true, 'Please provide a Samedi'],
      },
    },
  ],
})

horaireSchema.index({ class: 1 }, { unique: true })

const Horaire =
  mongoose.models.Horaire || mongoose.model('Horaire', horaireSchema)
export default Horaire
