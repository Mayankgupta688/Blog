var cpuCount = require('os').cpus().length;

var cluster = require('cluster');  

var express = require('express');

var vash = require('vash');

var app = express();

app.set("view engine", "vash");

app.use(express.static(__dirname + '/public'));

var controller = require("./controller");

controller.init(app);

if (cluster.isMaster) {
  for (var i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  app.listen(80);
}
