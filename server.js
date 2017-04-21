var express = require('express')
var app = express()
var path = require('path');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname+'/bundle.js'));
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
