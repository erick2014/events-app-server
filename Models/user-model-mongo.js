const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: value => validator.isEmail
  },
  password: String
})

module.exports = mongoose.model('User', userSchema)
