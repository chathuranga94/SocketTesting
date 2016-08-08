var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


io.on('connection', function(socket){
  console.log('a user connected');
   
  socket.on('sending', function(data){      
        console.log(data);
        io.emit('recieve', data);    
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});