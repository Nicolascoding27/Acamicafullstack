// //casi no se usan
// let n=0
// do{
//     console.log('Do while', n)
// } while (n>=10)
// // For loop this loop repeats 10 times
// for(let i=0 ; i<10; i++){
//     console.log(i)
// }
// //operators 
// //n=n+1
// //n +=1 
// const colors =['Blue','Green','Black']

// for(let i=0 ;i<color.length;i++){
//     console.log(color[i])
// }
///undefined si no conoce los valores que vienen 

//No la conocia
// for (const color of colors){
//     console.log('color')
// }

//Switch 
// const producto ={
//     name:'Samsung Galaxy D20',
//     price:900,
//     offerPrice:560,
//     freeshipping:false,
//     status:'ACTIVE'
// }
// //funcion basica para nombre 
//     function nombre(name){
//         console.log('Hello',name)
//     }
//     nombre('freddy')

// //fUNCION PARA CALCULAR DESCUENTO
//     function calculateOfferPercent (originalprice,offerPrice){
//         const percent=(offerPrice*100)/originalprice
//         const percentDiscount=100 - percent
//         console.log(percentDiscount + "%") 
//     }
//     calculateOfferPercent(500,250)
// if(products.status==='Active'){
//     console.log('El producto se encuentra activo')
// } else if (products.status==='NO STOCK'){\
//     console.log('El producto se encuentra SIN Stock')
// ``}
// else{
//     console.log('El estado del producto no es correcto')
// }

// switch (product.status){
//     case 'ACTIVE ';
//     console.log('El producto se encuentra activo ')
//     break;
//     case 'Inactive';
//     console.log('El producto se encuentra INACTIVO')
// 
//Ejercicio 6


//Ejercicio en 5
let n=10
let pares=0
let impares=0
for(let i=0;i<n;i++){
    let quantity= prompt('Ingrese la cantidad de numeros')
    if(quantity%2===0){
       pares+=1 
    }
    else if(quantity%2!-=0){
       pares+=1 
    }
}
// function calculaIngresos(){

// }

// Clase 3 Javascript 

// Scope 

//
const global= 'Scope global'\
//hoisting: comportamiento javascript 
const Myfunction =()=>{
   const functionScope="SCOPE FUNCTION"
   console.log(blockscope)
}
if(global=== 'SCOPE GLOBAL'){
   const blockScope='BLOCK SCOPE'
   console.log(blockscope)
``}
console.log(global)
console.log(Myfunction)//WE DONT HAVE ACCESS TO THIS VARIABLE SO WE GET AN ERROR
console.log(blockScope)//WE DONT HAVE ACCESS EITHER SO WE GET AN ERROR


// const year= put a plural to an array 

const values=['text',98,true,75,{id:1}]
const numberValues=values.filter((value)=> !isNa(parseInt(value)))//The ones that are not Na, wqe have the ones that are not numbers 
const notNumberValues=values.filter((value)=>isNa(parseInt))
//Codigo acortado 
const SumOfNumberValues= values.filter(value=>!isNa(parseInt(value))).reduce((a,b)=> a+b)

//MY FIRST PROMISE 
const promise= new Promise((resolve,reject)=> {
   if(true){
      resolve('Stuff Worked')
   }
   else{
      reject('Error ')
   }
})