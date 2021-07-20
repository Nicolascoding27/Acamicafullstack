//We will create a node module
///Is better to have everything as modules
//--------------Exercise 1------------------

// exports.perimeter=(x,y)=>(2*(x+y));
// exports.area=(x,y)=>(x*y)

//----------------Exercise 2-------
module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(()=>
    ///--The error message is attached to the error object => Like error.message
    //Primer parametro error, segundo parametro funcion
    callback(new Error("Rectangle dimensions should be greater than zero"),null)//Simulando error
    ,2000);//simulation of a request, first parameter 
    console.log();
  }
  else{
    setTimeout(()=>
    //Primer parametro error, segundo parametro funcion
    callback(null,
        {
            //no tengo que pasar X y Y porque vienen de los atributos
            perimeter:()=>(2*(x+y)), 
            area:()=>(x*y) // no tengo que pasar x y y en el area porque vienen como parametros
        }
        ),2000
    )
  }
};
