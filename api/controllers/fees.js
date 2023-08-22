import Fee from '../models/fees.js'

// Get all fees
export const getAllFees = async (req, res) => {
  try {
    const fees = await Fee.find()
    res.status(200).json(fees)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getStudentFees = async (req, res) => {
  try {
    const fees = await Fee.find({ student: req.params.id })
    res.status(200).json(fees)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Create a new fee
export const createFee = async (req, res) => {
  const newFee = new Fee(req.body)

  try {
    const savedFee = await newFee.save()
    res.status(201).json(savedFee)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Get a specific fee by ID
export const getFeeById = async (req, res) => {
  try {
    const fee = await Fee.findById(req.params.id)
    if (!fee) {
      return res.status(404).json({ message: 'Fee not found' })
    }
    res.status(200).json(fee)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update a specific fee by ID
export const updateFee = async (req, res) => {
  try {
    const fee = await Fee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!fee) {
      return res.status(404).json({ message: 'Fee not found' })
    }
    res.status(200).json(fee)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Delete a specific fee by ID
export const deleteFee = async (req, res) => {
  try {
    const fee = await Fee.findByIdAndDelete(req.params.id)
    if (!fee) {
      return res.status(404).json({ message: 'Fee not found' })
    }
    res.status(204).json()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
