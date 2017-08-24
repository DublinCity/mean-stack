const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  id: Number,
  name: {
    first: String,
    last: String
  },
  address: {
    jibun: String,
    road: String
  }
})

module.exports = mongoose.model('Employee',EmployeeSchema)