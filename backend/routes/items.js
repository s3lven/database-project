const express = require('express')

const {getItems, createItems, updateItems, deleteItems, getOneItem } = require('../controllers/itemController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// API Endpoints
// Get item list
router.get('/', getItems)

// Require auth for all item routes
router.use(requireAuth)

// Get one item 
router.get('/:id', getOneItem)
// Create a new Item
router.post('/', createItems)
// Update an Item
router.patch('/:id', updateItems)
// Delete an Item
router.delete('/:id', deleteItems)

module.exports = router