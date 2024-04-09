const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        recommendedUses: {
            type: String,
        },
        specialRequirements: {
            type: String,
        },
        numberAvailable: {
            type: Number,
            required: true,
        },
        productURL: {
            type: String,
        },
        location: {
            type: String,
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model("items", itemSchema)

