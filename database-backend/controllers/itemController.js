const mongoose = require('mongoose')
const Items = require('../dbItems')

// Get Items List
const getItems = async (req, res) => {
    try {
        const allItems = await Items.find({}).sort({ createdAt: -1})
        res.status(200).send(allItems)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// Create Items List
const createItems = async (req, res) => {
    const dbItems = req.body
    try {
        const newItems = await Items.create(dbItems)
        res.status(201).send(newItems)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Update Items List
const updateItems = async (req, res) => {
    const {id} = req.params
    try {
        // Check if ID is valid
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no Item with id of ${id}`)
        }
        const itemID = {_id: id}
        const update = { completed : true}
        const updateItem = await Items.findOneAndUpdate(itemID, update)
        if (!updateItem) {
            return res.status(404).send(`There is no Item with id of ${id}`)
        }
        res.status(200).send(updateItem)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Delete Items List
const deleteItems = async (req, res) => {
    const {id} = req.params
    try {
        // Check if ID is valid
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no Item with id of ${id}`)
        }
        const deleteItem = await Items.findOneAndDelete({_id: id})
        res.status(200).send(deleteItem)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getItems,
    createItems,
    updateItems,
    deleteItems
}