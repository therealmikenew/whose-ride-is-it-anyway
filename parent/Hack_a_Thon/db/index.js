const mongoose = require('mongoose')
require('dotenv').config() // Add this line

// let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/todo_tracker'
// //here?----------------
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'
// //----------------------
mongoose
  .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db