## Upload Files

The Formidable Module

-> Intsall
-> npm install formidable

var formidable = require('formidable')

Upload Files

Step 1 : Create an Upload Form
Create a node.js file that writes an HTML Form , with an Upload field

var http = require('http');
http.createServer( function (req,res) {
res.writeHead(200, {'Content-Type' : 'text/html'};
res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'))
res.write('<input type="file" name="fileuploaded">')
res.write('<input type="submit">')
res.write('</form'>)
return res.end();

}).listen(8080);


2.  Parse the Uploaded File
var http = require('http');
var formidable =  require('formidable');


http.createServer( function (req,res) {
    if(req.url == '/fileupload') {
        var form =  new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            res.write('file uploaded');
            res.end();
        })
    }
})



Save File











