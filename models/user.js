const { Schema, model } = require('mongoose')

const userSchema  = new Schema({
  name: String,
  chatId: Number,
  phone: String,
  admin: {
    type: Boolean,
    default: false,
  },
  action: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
})

module.exports = model('User', userSchema)
