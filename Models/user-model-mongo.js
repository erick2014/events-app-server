const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: value => validator.isEmail(value)
  },
  firstName: String,
  lastName: String,
  password: String
})
// remove warning in mongoose
userSchema.set('autoIndex', false);

module.exports = mongoose.model('User', userSchema)
