const express = require("express")
const mongoose = require("mongoose")

const itemRoutes = require('./routes/items')
const userRoutes = require('./routes/users')

const Cors = require('cors')
require('dotenv').config()


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
        app.listen(port, () => console.log(`Connected to the database and running on port: ${port}`))
    })
    .catch((err) => console.log(err))

// TODO: Add error handling for wrong routes

// Routes
app.use('/api/items', itemRoutes)
app.use('/api/user', userRoutes)
