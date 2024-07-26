const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

// MIDDLEWARE
app.use(express.json())

// REQUIRE
require('./bot/bot')

async function dev() {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Mongodb Successfully Connected'))
      .catch((err) => console.log(err))
    app.listen(process.env.PORT, () => {
      console.log(`Server STARTED https://localhost:${process.env.PORT}`)
    })
  } catch (error) {
    console.log("indexjs papka xato",error)
  }
}

dev()
