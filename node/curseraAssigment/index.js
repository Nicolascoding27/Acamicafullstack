/**Node modules and middlewares */
const express = require("express"); //Automatically included from the node modules
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

/**Regular variables  */
const dishRouter=require('./routes/dishRoutes.js');
const hostname = "localhost";
const port = 3000;
const app = express();
/**Server middlewares  */
app.use('/dish/:id',dishRouter);
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
/**Route declaration */
