const { Schema, model, Schema } = require('mongoose')

const Schema = new Schema({
  name: String,
  chatId: Number,
  phone: String,
  admin: {
    type: Boolean,
    default: false,
  },
  action: String,
  createdAt: Date,
  status: {
    type: Boolean,
    default: true,
  },
})

module.exports = model('User', Schema)
