const fs =require('fs')
if(!fs.existsSync('files')){
    fs.mkdirSync('files')
}
var a =7
var b=5
const calculadora= require('./calculadora')
const suma=calculadora.sumar(a,b);
const multiplicar=calculadora.multiplicar(10,10)
const dividir=calculadora.dividir(10,10)
console.log(dividir)
fs.appendFileSync('files/file.txt',`${a}+${b}=${suma}`,(err)=>{
if(err) throw err;
})
fs.appendFileSync('files/file.txt',`${a}*${b}=${multiplicar}`,(err)=>{
if(err) throw err;
})

