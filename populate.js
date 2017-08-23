require('./connection')
const Schema = require('./schema')
const mongoose = require('mongoose')
const db = mongoose.connection
const data = require('./employees.json')
const Employee = mongoose.model('Employee',Schema.EmployeeSchema)
function insertEmployees(callback){
	console.log('create')
	Employee.create(data,function(){})
}

function deleteEmployees(callback){
	Employee.remove({},function(){})
}

db.once('open',function(){
	deleteEmployees()
	insertEmployees()
})