const http = require('http')
const responder = require('./responder')
const EmployeeService = require('./EmployeeService')
require('./connection')
http.createServer(function(req, res) {
  _url = req.url
    // console.log(_url = /^\/employees\/(\d+)$/i.exec(_url))
    // console.log(_url =/^\/employees$/i.exec(_url))
  req.method = req.method.toUpperCase()
  if (req.method !== 'GET') {
    res.writeHead(501, {
      'Content-Type': 'text/plain'
    })
    return res.end(`${req.method} is not implemented by this server`)
  }
  if (_url = /^\/employees$/i.exec(req.url)) {
    return EmployeeService.getEmployees(function(err, data) {
      if (err) {
        return responder.send404(err, res)
      } else {
        responder.sendJson(data, res)
      }
    })

  }
  if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
    return EmployeeService.getEmployee(_url[1], function(err, data) {
      if (err) {
        return responder.send404(err, res)
      } else {
        responder.sendJson(data, res)
      }
    })
  }
}).listen(8080)