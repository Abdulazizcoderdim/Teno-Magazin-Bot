const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  chatId: Number,
  phone: String,
  admin: {
    type: Boolean,
    default: false,
  },
  action: String,
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = model('User', userSchema)
