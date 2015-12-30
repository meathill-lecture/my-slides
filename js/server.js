'use strict';

var express = require('express');
var app = express();

app.use(express.static('./'));

var server = app.listen(3000, function () {
  let host = server.address().address
    , port = server.address().port;
  
  console.log('Server run on: http://%s:%s', host, port);
});