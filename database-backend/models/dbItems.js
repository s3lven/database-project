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
            type: Array,
        },
        numberAvailable: {
            type: Number,
            required: true,
        },
        productURL: {
            type: String,
        },
        location: {
            type: Array,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model("items", itemSchema)

