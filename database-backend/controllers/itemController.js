const mongoose = require('mongoose')
const Items = require('../models/dbItems')

// Get Items List
const getItems = async (req, res) => {
    try {
        const allItems = await Items.find({}).sort({ category: 1})
        res.status(200).send(allItems)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// Get ONE Item from Items List
const getOneItem = async(req, res) => {
    const { id } = req.params
    try {
        // Check if ID is valid
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`There is no Item with id of ${id}`)
        }

        const item = await Items.findById(id)

        if(!item) {
            return res.status(404).send(`There is no Item with id of ${id}`)
        }
        res.status(200).send(item)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// Create Items List
const createItems = async (req, res) => {
    let {name, category, description, recommendedUses, specialRequirements, numberAvailable, productURL, location} = req.body

    try {
        const newItems = await Items.create({name, category, description, recommendedUses, specialRequirements, numberAvailable, productURL, location})
        res.status(200).send(newItems)
    } catch (error) {
        let emptyFields = []

        if (!name) {
            emptyFields.push('name')
        }
        if (!category) {
            emptyFields.push('category')
        }
        if (!numberAvailable) {
            emptyFields.push('numberAvailable')
        }
        if (location.length === 0) {
            emptyFields.push('location')
        }

        if (emptyFields.length > 0) {
            return res.status(400).json({error: "Please fill in all of the required fields", emptyFields, location})
        }

        res.status(400).send(error)
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
        const update = { ...req.body}
        const updateItem = await Items.findOneAndUpdate(itemID, update)
        if (!updateItem) {
            return res.status(404).send(`There is no Item with id of ${id}`)
        }
        res.status(200).send(updateItem)
    } catch (error) {
        res.status(400).send(error.message)
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
        if (!deleteItem) {
            return res.status(404).send(`There is no Item with id of ${id}`)
        }
        res.status(200).send(deleteItem)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getItems,
    getOneItem,
    createItems,
    updateItems,
    deleteItems
}