//Assigments--- 1 extend support for /:dishId
//--2 ---- Add a new promoRouter.js 
//     /promotions && /promotions/:promoId
//--3---- iomplement leaderRouter.js 
// /leaders 
// /leaders/:leaderId 
/**Node modules and middlewates  */
const express= require('express');
const bodyParser= require('body-parser')

/**Route */
const dishRouter=express.Router();
/**Middlewares  */
dishRouter.use(bodyParser.json());
/**CRUD methods */
dishRouter.route('/').all((Oreq,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain')
    next();
}).get((req,res,next)=>{
    res.end(`Will send you the dish ${req.body.name}!!`)
}).post((req,res,next)=>{
    res.end(`Post operation not supported for this route`)
}).put((req,res,next)=>{
    res.statusCode=200;
    res.end(`Updating dish ${req.body.name}`)
}).delete((req,res,next)=>{
    res.statusCode=200;
    res.end(`Dish ${req.body.name} deleted succesfully!!`)
})

/**Exporting the route */
module.exports=dishRouter;