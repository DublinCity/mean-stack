const mongoose = require('mongoose')
const Schema = require('./schema')
const Employee = mongoose.model('Employee',Schema.EmployeeSchema)

exports.getEmployees = getEmployees
exports.getEmployee = getEmployee
exports.getEmployeeByName = getEmployeeByName

function getEmployees(callback) {
  Employee.find({}).exec(callback)
}

function getEmployee(employeeId, callback) {
  let employee
  console.log(employeeId)
  getEmployees(function(err, data) {
    if (err) {
      return callback(err)
    } else {
      console.log(data)
      employee = data.find(item => item.id === employeeId)
      console.log(employee)
    }
    console.log(employee)
    callback(err, employee)
  })
}

function deleteAllEmployees(callback){
  Employee.remove({}).exec
}