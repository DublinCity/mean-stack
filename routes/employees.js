const express = require('express');
const router = express.Router();
// const responder = require('../responder')
// const EmployeeService = require('../EmployeeService')
const mongoose = require('mongoose')
require('../connection')
const Employee = mongoose.model('Employee')
/* GET users listing. */
router.get('/', function(req, res, next) {
  Employee.find().sort('name.last').exec(function(err, data) {
    if (err) {
      return next(err)
    } else {
      return res.json(data)// TODO
    }
  })
});

router.get('/:employeesId', function(req, res, next) {
  console.log(req.params.employeesId.toString())
  Employee.find({"id":req.params.employeesId}).exec(function(err,data){
  	if (err) {
  		return next(err)
  	} else if (!data) {
  		res.send(404)
  	} else {
  		res.json(data)	
  	}
  })
})

router.delete('/:employeesId',function(req, res, next){
	console.log(req.params.employeesId)
	Employee.remove({id:req.params.employeesId}).exec(function(err,data){
		if(err){
			return next(err)
		} else {
			console.log('delete: ',data)
			res.json(data)
		}
	})
})
module.exports = router;