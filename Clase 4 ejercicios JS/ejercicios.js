//EJERCICIO NUMERO 1, CREAR UN PROMPT INDEFINIDO HASTA QUE EL USUARIO INGRESE STOP 
//INTENTOS FALLIDOS
// function arrayCheck(){
//     const number=prompt('Ingresa un numero, me detendre si escribes STOP');
//     // number ? ('STOP') : break;
//     //lo que estoy intentando escribir es
//     var array_numbers=[]
//     var condition= number==='stop'? "true": "false"
//     for(let i=0;condition==="false";i++ ){
//     const number2=prompt('Ingresa un numero, me detendre si escribes STOP');
//     array_numbers.push(number2)
//     // number==="STOP" ? console.log (array_numbers) : arrayCheck() ;
//     }
//     return array_numbers
// }
//operador ternaario// ! con esto nego este statement //!!con esto es true 
// function arrayCheck(){
//     const number= prompt('type')
//     const array=[];
//  if(number="stop")return 
//  else{
//     number.push(array)
//  }
// }

// function arrayCheck(){
//    var number=prompt("inserta un numero")
//    var numbers=[]
//    while(number!=="stop"){
//       numbers.push(number)1
//       var number2=prompt("inserta un numero")
//       numbers.push(number2)
//    }
//    return numbers
// }
//intento 6
      // var array1=[]
      // function arrayCheck(){
      //    var number=prompt("Ingresa un numero, me detendre si escribes STOP");
      // if(number==="STOP"){
      //    console.log(array1)
      //    return;
      // } 
      //    array1.push(number);
      //    arrayCheck () ;
         
      // }
      // arrayCheck();

//EJERCICIO 2
      
      var results=[]
   function ejercicio2(){
         var number=parseInt(prompt("Ingresa un numero, me detendre si escribes 0"));
      if(number===0){
         var resultFilteredOdd=results.filter(number=>number%2===0);
         var resultFilteredEven=results.filter(number=>number%2!==0);
         var resultFileteredNotstring=results.filter(number=>typeof(number===int)?:number));
         console.log(`The odd numbers are ${resultFilteredOdd}`);
         console.log(`The even numbers are ${resultFilteredEven}`);
         console.log(`The not int are${resultFileteredNotstring}`);
         return;
      } 
         results.push(number);
         ejercicio2() ; 
   }
      ejercicio2();
