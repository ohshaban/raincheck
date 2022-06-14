const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting All
router.get('/', async (req, res) => {

})

// Getting One
router.get('/:id', getUser, (req, res) => {

})

// Creating One
// default _id should be replaced with hashed phone number
router.post('/', async (req, res) => {

})

// Updating One
router.put('/:id', getUser, async (req, res) => {

})

// Deleting One
router.delete('/:id', getUser, async (req, res) => {

})


async function getUser(req, res, next) {
}


module.exports = router
