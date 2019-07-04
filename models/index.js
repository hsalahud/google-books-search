const { Schema, model } = require('mongoose')

const db = {
  Search: require('./Search.js')(Schema, model),
  Saved: require('./Saved.js')(Schema, model)
}

module.exports = db