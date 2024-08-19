// // var http = require('http');

// // http.createServer( function (req,res) {
// //     res.writeHead(
// //         200, {'Content-Type' : 'text/html'}
// //     );
// //     res.end('Hello world  Namskara how r u a');
// // }).listen(8081);


// // var http =  require('http');
// // var dt = require('./myFirstModule');

// // http.createServer( function (req,res) {
// //     res.writeHead(200, {
// //         'Contenet-Type' : 'text/html'
// //     });
// //     res.write(" The Date and  Time are Current;y : " + dt.myDateTime());
// //     res.end();
// // }).listen(8082)

// var http = require("http");

//     // Create a server objects:

//     http.createServer( function (req,res){
//         res.write("Hello world") //  Write a  response to the Client 
//         res.end(); // end the response 
//     }).listen(8083); // the server object listen on port 8080



// var http = require('http');
// http.createServer( function (req,res) {
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'
//     })
//     res.write(req.url)
//     res.end();
// }).listen(8083)

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8083);