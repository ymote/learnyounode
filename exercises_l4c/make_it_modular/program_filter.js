var fs = require('fs')
var path = require('path')

// enter your code below

  fs.readdir(dir, function (err, list) {
    // enter your code below

    list = list.filter(function (file) {
      // enter your code below

    })
    callback(null, list)
  })
}
