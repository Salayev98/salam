
let click2= document.querySelector(".click-1")
let click1= document.querySelector(".click-2")
let sidebar= document.querySelector(".side-bar-menu")
let click0=document.querySelector(".click-0")
let buttons=document.querySelector(".buttons")
let left =document.querySelector(".left")
let right=document.querySelector(".right")

click2.addEventListener("click" , function(e){
    e.preventDefault()
    click2.style.display="none"
    click1.style.display="inline-block"
    sidebar.style.display="block"
})
click1.addEventListener("click" , function(e){
    e.preventDefault()
    click1.style.display="none"
    click2.style.display="inline-block"
    sidebar.style.display="none"
})
click0.addEventListener("click" ,function(e){
    e.preventDefault()
    console.log(e);
     if(buttons.style.display=="none"){
        buttons.style.display="flex"
        buttons.style="flex"
     }else{
        buttons.style.display="none"
     }
 
    
})



