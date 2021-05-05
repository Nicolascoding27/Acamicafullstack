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
}



//Yo puedo usar el query selector tanto para clase como para Id's