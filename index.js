const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
require('dotenv').config()

// MIDDLEWARE
app.use(express.json())

async function dev() {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Mongodb Successfully Connected'))
      .catch((err) => console.log(err))
  } catch (error) {
    console.log(error)
  }
}

dev()
