const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("items", itemSchema)