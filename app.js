var express = require('express'),
    http = require('http'),
    path = require('path');
var app = express();

app.get('/', function(request, response) {
  response.status(200).send(JSON.stringify({}));
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});