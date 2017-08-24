exports.send500 = function(err, res) {
  res.writeHead(501, {
    'contentType': 'text/plain'
  })
  return res.end(JSON.stringify(err))
}

exports.sendJson = function(data, res) {
  res.writeHead(200, {
    'contentType': 'text/plain'
  })
  return res.end(JSON.stringify(data)) // TODO
}

exports.send404 = function(err, res) {
  res.writeHead(404, {
    'contentType': 'text/plain'
  })
  return res.end('Not Found')
}