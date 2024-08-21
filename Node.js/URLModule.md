## The Built-in URL Module

-> The URL module splits up a web address into readable parts
-> To Include the url module, use the require() Method

Parse an address with the url.parse() method, and it will return URL object with each part of the address as properties

// Split a web adddress into readable parts:

var url = requir('url')
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata= q.query;
console.log(qdata.month);

Example for URL Module :

var http = require('http');
var url = require('url');
var fs= require('fs');

http.createServer( function (req,res) {
var q = url.parse(req.url,true);
var filename = '.' + q.pathname;
fs.readfile(filename, function(err,data) {
if (err) {
res.writeHead(404, {'content-type' : 'text/html'});
return res.end("404 NOt FOund) "

    }
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write(data);return res.end();

})

}).listen(8080);
