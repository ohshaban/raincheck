const express = require('express')
const router = express.Router()
const Event = require('../models/event')

// Getting All
router.get('/', async (req, res) => {
  try {
    const events = await Event.find()
    res.json(events)
  } catch (err) {
    res.state(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getEvent, (req, res) => {
  res.json(res.event)
})

// Creating One
router.post('/', async (req, res) => {
  const event = new Event({
    name: req.body.name,
    organizer: req.body.organizer,
    date: Date.now,
    description: req.body.description,
    location: req.body.location,
    link: req.body.link,
    participants: req.body.participants
  })

  try {
    const newEvent = await event.save()
    res.status(201).json(newEvent)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.put('/:id', getEvent, async (req, res) => {

})

// Deleting One
router.delete('/:id', getEvent, async (req, res) => {

})


async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id)
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find event' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.event = event
  next()
}


module.exports = router
