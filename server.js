// Http is used to create Server to take up the requests
var http = require('http');

// Express act as a routing Engine 
var express = require('express');

// Express is initialized to carry ot routing process
var app = express();

app.get('/', function(req, res) {
  res.send("Hi All");
})

// Server is created and express is used as a middleware to configure the routes
var server = http.createServer(app);

// Apllication is made to listen Http request at port 3000
app.listen(3000);   
