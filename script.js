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

function NumberToLetter(){
    const numero=prompt('Ingresa un numero del 1 al 10')
    switch(numero){
        case '1':
        console.log('A')
        break;
        case '2':
        console.log('B')
        break;
        case '3':
        console.log('C')
        break;
        case '4':
        console.log('D')
        break;
        case '5':
        console.log('E')
        break;
        case '6':
        console.log('F')
        break;
        case '7':
        console.log('G')
        break;
        case '8':
        console.log('H')
        break;
        case '9':
        console.log('I')
        break;
        case '10':
        console.log('J')
        break;
        default:
            console.log('Ingrese un numero valido');
    }
        
}
NumberToLetter();