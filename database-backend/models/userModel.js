const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function (email, name, password) {
    // Check if all the fields have been inputted
    if(!email || !name || !password) {
        throw Error('All fields must be filled')
    }

    // Validate the email
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    // Validate if password is strong enough -- 
    // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1,
    // returnScore: false, pointsPerUnique: 1,
    // pointsPerRepeat: 0.5, pointsForContainingLower: 10,
    // pointsForContainingUpper: 10, pointsForContainingNumber: 10,
    // pointsForContainingSymbol: 10 }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough')
    }


    // Extra check to ensure that email exists
    const doesEmailExist = await this.findOne({ email })
    if (doesEmailExist) {
        throw Error('Email is already in use')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({
        email,
        name,
        password: hash
    })

    console.log(user)
    return user
}


module.exports = mongoose.model('User', userSchema)