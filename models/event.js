const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  organizer: {
    type: ObjectId,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  participants: {
    type: [ObjectId],
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)
