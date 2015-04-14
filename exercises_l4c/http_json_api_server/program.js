var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  // enter your code below


  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // enter your code below

  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]))

// exit if no response after 2 seconds
setTimeout(function() {
  process.exit();
}, 2000);
