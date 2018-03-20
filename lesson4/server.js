/*
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


io.on('connection', function (socket) {
   for(var i in messages) {
     io.sockets.emit("display message", messages[i]);
   }
   socket.on("send message", function (data) {
       messages.push(data);
       io.sockets.emit("display message", data);
   })
});

 
var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.redirect('http://google.com');
});
app.get("/search", function(req, res){
    res.redirect('http://google.com/search?q={search value}');  
});
app.get('*', function(req, res){
  res.send('error 404', 404);
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
*/

var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});





server.listen(3000);


