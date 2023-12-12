const nav=document.querySelector("nav")

window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        nav.style.backgroundColor="rgba(0,0,0,0.8)"
        nav.style.transition = "all 1s ease";
        nav.style.zIndex="1000"
        nav.style.position="fixed"
    }
    else{
        nav.style.backgroundColor="";
        nav.style.transition = "all 1s ease";
    }
})