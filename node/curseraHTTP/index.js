const http=require('http');
const hostname='localhost';
const port=3000;
const server= http.createServer((req,res)=>{
    console.log('>>>Headers'+JSON.stringify(req.headers)) //this set up the headers
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>Hello World</h1></body></html>');//This html is returned in the server
})
server.listen(port,hostname,()=>{
    console.log(`>>>Server running at http://${hostname}:${port}`)
})