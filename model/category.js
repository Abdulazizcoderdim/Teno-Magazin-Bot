const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
  title: String,
  status: {
    type: Boolean,
    default: true,
  },
})

module.exports = model('Category', categorySchema)
