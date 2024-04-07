const express = require("express")
const mongoose = require("mongoose")

const Cors = require('cors')
require('dotenv').config()

const {
    getItems, createItems, updateItems, deleteItems
} = require('./controllers/itemController.js')

// App Config
const app = express()
const port = process.env.PORT || 8000
const connectionURL = process.env.MONGO_URI

// Middlewares
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connectionURL)
.then(() => {
    app.listen(port, () => console.log(`Running on port: ${port}`))
})
.catch((err) => console.log(err))

// API Endpoints

// Get item list
app.get('/items', getItems)

// Create a new Item
app.post('/items', createItems)

// Update an Item
app.put('/items/:id', updateItems)

// Delete an Item
app.delete('/items/:id', deleteItems)

