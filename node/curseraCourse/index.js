//A efficient way to do calculations
//---This is a function
// var rect={
//     perimeter: (x,y) => (2*(x+y)),
//     area:(x,y)=> (x*y)
// }
///------Second way of doing it-------
var rect=require('./rectangle')

function solveRect(l,b){
    console.log('Solving for rect l='+ l + "and b=" + b)
    if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than zero")
    }
    else{
        console.log("The area of the rectangle is"+ " "+ rect.area(l,b))
        console.log("The area of the rectangle is" + " "+rect.perimeter(l,b))
    }
}
console.log(rect)
solveRect(2,4)
solveRect(0,5)
solveRect(-2,3)