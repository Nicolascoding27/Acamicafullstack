const express= require('express');
const bodyParser= require('body-parser')

const dishRouter=express.Router();
//Route input will be all together
/**Clean code */
dishRouter.use(bodyParser.json());
dishRouter.route('/').all((req,res,next)=>{ //.all() to handle http methos 
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
}).get((req,res,next)=>{
    res.end('Will send all the dishes to you')
}).post((req,res,next)=>{
    res.end(`Dish ${req.body.name} added succesfully with details ${req.body.description}`)
}).put((req,res,next)=>{ //We are changing just one dish so it does not make sense 
    res.statusCode=403;
    res.end('PUT Operation not supported on /dishes')
}).delete((req,res,next)=>{ //We are changing just one dish so it does not make sense 
    res.end('Deleting all dishes!!')
});  //The handling will be the same as before 

/**Now we need to export */
module.exports=dishRouter;