const express = require ("express")
const app = express()
const morgan = require ( "morgan" )
const connectDB = require("./config/db")


// Middleware

// app.use(express.json())
// app.use(morgan('dev'))

//Database middleware
connectDB()

// Routes

module.exports = app