const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    // Verify if there is an authentication header in the request
    const { authorization } = req.headers
    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    // Grab the token part of the authentication
    const token = authorization.split(' ')[1]

    // Verify is token has been tampered with
    try {
        // Grab id from the token
        const { _id } = jwt.verify(token, process.env.SECRET)
        // Check against the db
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth