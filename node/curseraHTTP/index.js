//Building a server 
const http = require("http");
const hostname = "localhost";
const fs = require("fs");
const path = require("path");
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(">>>Request for" + req.url + "By method" + req.method); //this set up the headers, the headers change depending on the request source: ex local host or postman
  if (req.method == "GET") {
    //I'm bvuiling a get method
    var fileUrl;
    if (req.url == "/") {
      fileUrl = "/index.html";
    } //Default if the request is empty
    else {
      fileUrl = req.url;
    }
    var filePath = path.resolve("./public" + fileUrl);
    const fileExt = path.extname(filePath);
    if(fileExt=='.html'){
        fs.exists(filePath,(exists)=>{
            if(!exists){
                res.statusCode=404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>Error 404: ' + fileUrl + 'not-found ')
                return;
            }
            res.statusCode=200
            res.setHeader('Content-Type','text/html')
            fs.createReadStream(filePath).pipe(res);
        })//Here exits its true or false
    }
    else{
        res.statusCode=404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>Error 404: ' + fileUrl + 'not a html-file ')
                return;
    }
  }
  else{
    res.statusCode=404;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Error 404: ' + fileUrl + 'request-method not accepted ')
    return;
  }
//   console.log("<<<<path of the file");
//   res.statusCode = 200;
//   res.setHeader("Content-type", "text/html");
//   res.end("<html><body><h1>Hello World</h1></body></html>"); //This html is returned in the server
});
server.listen(port, hostname, () => {
  console.log(`>>>Server running at http://${hostname}:${port}`);
});
