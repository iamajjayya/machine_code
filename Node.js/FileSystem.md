Node.js as a File Server
------------------------
-> The Node.js file System Module allows you to work with the file system  on your computer 
-> To Include the File System module, use the require() method:

var fs = require('fs);

Common use for the  File System Module
--------------------------------------

* Read Files
* Create Files
* Update Files
* Delete Files
* Rename Files 

Read Files
-----------
-> The fs.readFile() method used to read files on your computer

Example :  
  Demofile.html 

  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>File SYstem Module </h1>
    <p>Read A File </p>
</body>

ReadFile.js


var http =  require('http')
var fs = require('fs');

http.createServer( function (req,res) {
    fs.readFile('./Demofile.html',  function (err,data) {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data);
        return res.end()
    })
}).listen(8082)

Create Files
------------

The File System module has  methods for creating new files  

* fs.appendFile()
* fs.open()
* fs.writeFile()

Example : 

var fs = require('fs');

//create a file named mynewfile1.txt :

fs.appendFile('mynewfile1.txt', 'Hello Content', function(err) {
    if(err) throw err;
    console.log('Saved')
})

fs.open()

-> fs.open() method takes a 'flag' as the secons argument, if  the flag is 'w' for "writing",  the specified file is opened for writing , 
If the file does not exist, an empty file is created 

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err,file) {
    if (err)  throw err ;
    console.log('Saved!')
});


fs.writeFile() 

The fs.writeFile() Method replaces the specified file and content if it exists, If the file does not exist, a new file , a  new file, Containnig the specified contnet will be created 

var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'hello contnet' , function (err) {
    if (err) throw err ;
    console.log('Saved')
})

Update Files 

The File System module has method for updating files 

1. fs.appendFile()
2. fs.writeFile()


fs.appendFile() -> method appends the specified content at the end of te the specified file:

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is text' function (err) {
    if (err) throw err ;
})

Delete Files

-> To delete a  file  with the file System module, use the fs.unlink method

-> fs.unlink() method delets the specifies file

var fs = require('fs');

fs.unlink('mynewfile2.txt',  function (err) {
    if(err) thorw err ;
    console.log('File deleted')
})

Rename Files 

To rename a file with file system module,  use the fs.rename()  method.
the fs.rename() method renmae the specifies file 

fs.rename('mynewfile1.txt', 'myrenamedfile1.txt',  function (err) {
    if (err) throw err;
    console.log("File Renamed ")
})













































































































































































































