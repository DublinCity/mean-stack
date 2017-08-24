var express = require('express');
var router = express.Router();
const responder = require('../responder')
const EmployeeService = require('../EmployeeService')
require('../connection')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return EmployeeService.getEmployees(function(err, data) {
      if (err) {
        return responder.send404(err, res)
      } else {
        responder.sendJson(data, res)
      }
    })
});

router.get('/:employeesId',function(req, res, next){
	console.log(req.params.employeesId)
	return EmployeeService.getEmployee(req.params.employeesId, function(err, data) {
      if (err) {
        return responder.send404(err, res)
      } else {
        responder.sendJson(data, res)
      }
    })
})
module.exports = router;
