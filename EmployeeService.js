const mongoose = require('mongoose')
const Schema = require('./schema')
const Employee = mongoose.model('Employee',Schema.EmployeeSchema)

exports.getEmployees = getEmployees
exports.getEmployee = getEmployee

function getEmployees(callback) {
  Employee.find({}).exec(callback)
}

function getEmployee(employeeId, callback) {
  let employee
  getEmployees(function(err, data) {
    if (err) {
      return callback(err)
    } else {
      employee = data.find(item => item.id === employeeId)
    }
    callback(err, employee)
  })
}

function deleteAllEmployees(callback){
  Employee.remove({}).exec
}