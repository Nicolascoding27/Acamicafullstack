//Node modules and middlewares
const express = require("express"); //Automatically included from the node modules
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

/**Regular variables  */
const dishRouter=require('./routes/dishRouter');
const hostname = "localhost";
const port = 3000;
const app = express();

/**Middlewares */
app.use('/dishes',dishRouter); //any request coming to /dishes will be handled by dishRouter
// app.use(morgan("dev")); //Development version
// app.use(bodyParser.json());//the body of the incoming request will be parser and will be placed in the req.body
// app.all("/dishes", (req, res, next) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   next();//Continue for lookiong for aditional especifications
// }); //First parameter =endPoint
// /**CRUD METHODS */
// app.get('/dishes',(req,res,next)=>{
//     res.end('Will send all the dishes to you!')
// })
// app.post('/dishes',(req,res,next)=>{
//     res.end(`Dish ${req.body.name} added succesfully with details ${req.body.description}`)
// });
// app.put('/dishes',(req,res,next)=>{ //We are changing just one dish so it does not make sense 
//     res.statusCode=403;
//     res.end('PUT Operation not supported on /dishes')
// });
// /**We need auth for this kind of operations  */
// app.delete('/dishes',(req,res,next)=>{ //We are changing just one dish so it does not make sense 
//     res.end('Deleting all dishes!!')
// });

// /**CRUD METHODS 2 for just one dish*/
// /**We're doing everything separetl, that's why we use express*/
// app.get('/dishes/:dishId',(req,res,next)=>{ 
//     res.end('Will send details of the dish:' + ' '+ req.params.dishId + 'to you!') //params refers to the parameter in this case the dish id
// })
// /**It does not make sense to create a dish in a specific path */
// app.post('/dishes/:dishId',(req,res,next)=>{
//     res.statusCode=403;
//     res.end('POST Operation not supported on /dishes/'+req.params.dishId)
// });
// app.put('/dishes/:dishId',(req,res,next)=>{ //We are changing just one dish so it does not make sense 
//     res.write('Uptading the dish:'+ req.params.dishId )
//     res.end(`Will uptade the dish: ${req.body.name} with details  ${req.body.description}`)
// });
// /**We need auth for this kind of operations  */
// app.delete('/dishes/:dishId',(req,res,next)=>{ //We are changing just one dish so it does not make sense 
//     res.end('Deleting dish: ' + req.body.name +'with the id'+ req.params.dishId)
// });



app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(">>>headers" + JSON.stringify(req.headers));
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server </h1></body></html>");
});
/**Server initialization */
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

// //Minute 18 Express Router let's keep going!!!!