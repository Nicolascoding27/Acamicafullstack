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
      
   //    var results=[]
   // function ejercicio2(){
   //       var number=parseInt(prompt("Ingresa un numero, me detendre si escribes 0"));
   //    if(number===0){
   //       var resultFilteredOdd=results.filter(number=>number%2===0);
   //       var resultFilteredEven=results.filter(number=>number%2!==0);
   //       var resultFileteredNotstring=results.filter(number=>typeof(number===int)?:number));
   //       console.log(`The odd numbers are ${resultFilteredOdd}`);
   //       console.log(`The even numbers are ${resultFilteredEven}`);
   //       console.log(`The not int are${resultFileteredNotstring}`);
   //       return;
   //    } 
   //       results.push(number);
   //       ejercicio2() ; 
   // }
   //    ejercicio2();

   // //ejercio 4 Dividir arrays 
   // var results=[]
   // function DividirArrays(){
   //    const number=prompt("Ingrese el numero");
   //    if(number===0)return;
   //    results.push(number);
   //    DividirArray(results)
   // }
   // function DividirArray(array){
   //    let arrayOfArrays=[]
   //    var length=array.length;
   //    var residuo=length%3;
   //    var resta=length-residuo
   //    var intervals=resta/3
   //    if(length%3===1){
   //       array.shift()
   //    }
   //    else if(length%3===2){
   //       array.shift()
   //       array.pop()
   //    }
   //    for(let i=0;i<3;i++){
   //       let ar                  rayElement=array.splice(0,intervals);
   //       arrayOfArrays.push(arrayElement)
   //    }
   //    return arrayOfArrays;
   // }

//Solucion ejercicio 4 
 //Objetos
 class plane {
    //constructor method
    // I can define properties as private  properties, ex
   //  private shape
    constructor(brand,model,color){
      this.brand=brand;
      this.model=model;
      //conditional iif there's an empty value 
      this.color=color ? color : "color desconocido"
    }
    //this is a method because is inside this class.
      start(){
         console.log(`Starting plane ${this.brand} ${this.model}`)
      }
   //best practices, create a method to edit the properties inside your objects
   //instead using console.log 
   getBrand(){
      return this.brand 
   }
   setBrand(Brand){
      this.brand=brand
   }
 }
 //We're creating a new object, and we're giving it some properties.
 const avion1= new Plane(boeing,737,blanco);
 const avion2=new Plane(top,646,azul);
 const avion3= new Plane(patch,654)
 console.log(avion1.getBrand())
 avion1.start(avion2.setBrand(boeing));
 avion2.start();
 //Ejercicio de clase 
 class persona{
    name 
    lastName
    age
    //POR QUE DEFINO LAS VARIABLES ACA?
    constructor(name,lastName,age){
       this.name=name;
       this.lastName=lastName;
       this.age=age 
    }

    getFullName(){
       return `El nombre es ${this.name} ${this.lastName}`
    }
    isOlder(){
       return this.age>18 //cpnpruebo si es mayor o no 
    }

 }
 const Peter= new persona('Peter','Parker',20);
 const Rodrigo= new persona('Rodrigo','Rodriguez',20);
 const Javier= new persona('Javier','Perez',20);
//Tpdp se hace una vez por cada ciclo, no se reescribe para cada usuario
//SIEMPRE QUE TENGA UNA VARIABLE QUE NO NECESITO SOBREESCRIBIR LA DECLARO CON CONST 
const user =[Peter,Rodrigo.Javier]//creo array de objetos 
 for(const user of users){
    const ageMessage=user.isOlder() ? 'es mayor de edad':'es menor de edad';
    console.log(`El usuario ${user.getFullName()} ${user.ageMessage()}`)
 }