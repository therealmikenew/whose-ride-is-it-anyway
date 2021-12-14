/// here is from OG code
const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/parksDatabase'

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db







// //here from deployment repo----------------
// export const BASE_URL =
//   process.env.NODE_ENV === 'production'
//     ? `${window.location.origin}/api`
//     : 'http://localhost:3001/api'
// //----------------------
// mongoose
//   .connect(dbUrl, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: true
//   })
//   .then(() => {
//     console.log('Successfully connected to MongoDB.')
//   })
//   .catch((e) => {
//     console.error('Connection error', e.message)
//   })
// mongoose.set('debug', true)
// const db = mongoose.connection

// module.exports = db