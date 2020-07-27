var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('start', function(message){
    console.log(message);
});
game.on('end', function(data){
    console.log(data.donneeA);
    console.log(data.donneeB);
});


game.emit("end", {"donneeA":"1","donneeB":"2"});
game.emit('start', 'The game is starting !');

