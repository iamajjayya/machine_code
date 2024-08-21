Node.js Events

->  Node.js is  perfect for Event-driven Applications

Events 

-> Every action on a Computer is an event , like when connection is made or a  file is  opened ,

 Objects in Node,js can Fire events, like the readStream object  fires, events when opening and closing a file 

var fs = require('fs');
var rs = createReadStream('./Demofile.html);
re.on('open', function() {
   console.log('The file is open ');  
})

Event and EventEmitter 

var event = require('events');
var eventEmitter = new events.EvenEmitter();


var myEventHandle = function () {
    console.log('I Have a scream ') ;
}

eventEmitter.on('scream', myEventHandler);


eventEmitter.emit('scream');































