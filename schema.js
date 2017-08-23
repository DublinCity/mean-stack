const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  id: String,
  name: {
    first: String,
    last: String
  },
  address: {
    jibun: String,
    road: String
  }
})

module.exports = {
  'EmployeeSchema': EmployeeSchema
}