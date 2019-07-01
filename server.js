const express = require('express')
const { join } = require('path')
const app = express()

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks_db"

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// require('./routes')(app)

require('mongoose').connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(process.env.PORT || 3001))
  .catch(e => console.log(e))