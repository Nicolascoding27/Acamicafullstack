//A efficient way to do calculations
//---This is a function
// var rect={
//     perimeter: (x,y) => (2*(x+y)),
//     area:(x,y)=> (x*y)
// }
///------Second way of doing it-------

const rectangle = require("./rectangle")

// var rect=require('./rectangle')

// function solveRect(l,b){
//     console.log('Solving for rect l='+ l + "and b=" + b)
//     if(l<=0 || b<=0){
//         console.log("Rectangle dimensions should be greater than zero")
//     }
//     else{
//         console.log("The area of the rectangle is"+ " "+ rect.area(l,b))
//         console.log("The area of the rectangle is" + " "+rect.perimeter(l,b))
//     }
// }
// console.log(rect)
// solveRect(2,4)
// solveRect(0,5)
// solveRect(-2,3)

//----Callbacks and error handling---
//--It's asynchronous so the values that come, come in an asynchronous way
function solveRect(l,b){
    console.log('Solving for rect l='+ l + "and b=" + b)
    rectangle(l,b,(err,rectangle)=> { //ya paso por parametro a l y b como x y Y no los tengo que volver a pasar mas adelante 
        if(err){
            console.log("Error",err.message)
        }
        else{
            console.log('The area of the rectangle of' + l + "and" +b + "is" + rectangle.area());
            console.log('The perimeter of the rectangle of' + l + "and" +b + "is" + rectangle.perimeter());
        }
    });
    console.log('This comes after everything is completed')
}
solveRect(0,2)