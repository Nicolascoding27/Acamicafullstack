window.onload=()=>{
    // const helements=document.getElementsByTagName()

    // const pquerry=document.querySelectorAll('description')
    // for(const p of pquery){
    //     serInterval(()=>{
    //         p.classList.remove('description')
    //         p.className='primary description'//estoy es una clase
    //         p.innerHtml=`
    //         <div class="iner html">
    //         <P>This is a test</p>`
    //     },3000)
    // }
    //class name vs class list 
    // class list=array de clase 
    // class name= just one class

    // const innerElemnts=document.querySelectorAll('.inner_elements')
    // const innerElemnts=document.querySelector('.inner_elements p')//I get the first P tag
    //If I just want the first one
    console.log('inner elements')//creating new elements
    const body=document.querySelector('body')
    const newDiv=document.createElement('div')
    newDiv.className='new_div'
    console.log(newDiv)
    const newP=document.createElement('p')
    newP.innerText='I love coding'
    newDiv.innerHtml=newP
    newDiv.appendChild(newP)
    body.appendChild(newDiv)
    //I delete all the body if I say
    //This way is more efficient 
    body.innerHtml=` 
    ${body.innerHtml}
    <h3>NEW H3</h3>
    <hr>
    <div class="new_div">
        <p>Im a new text</p>
    </div>`
    //Entender que es adjecent y mirar insertbefore()
}



//Yo puedo usar el query selector tanto para clase como para Id's

//-------------Local Storage------------------------------------

// let num=0 
// console.log(num)
// num=1
// console.log(num)
// localStorage.setItem('NUM',num)//Quiero guadar el valor que se llama NUM
var num2=parseInt(localStorage.getItem('NUM')) 
for (let index =0 ;INDEX<5;index++){
    num = num+1
}
console.log(num)
localStorage.setItem('NUM',num)//the value of num is 5 here
const  changeTheme=()=>{
    //si no hay nada me devuelve ligth
    const activeTheme=localStorage.getItem('THEME')|| 'light'//con doble raya devuelve el valor
    let newTheme=activeTheme ==='light'? 'dark':'light'
    localStorage.setItem('THEME',newTheme)
}
