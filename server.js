//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http'),
path = require('path'),
morgan = require('morgan'),
express = require('express');
// var async = require('async');
// var socketio = require('socket.io');


//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

var serving_path=path.resolve(__dirname, 'public');

router.use(express.directory(serving_path))
router.use(express.static(serving_path));

router.use(morgan('combined'));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
