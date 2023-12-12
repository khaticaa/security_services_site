const nav=document.querySelector("nav")
let id = new URLSearchParams(window.location.search).get('id');

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
let detal = document.querySelector('.detal')
function Service(){
    fetch(`http://localhost:3000/services/${id}`)
    .then(res => res.json())
    .then(data =>{
    
        detal.innerHTML += `
            <div class="s1box  ">
            <div class="img">
                <img src="${data.Image}" alt="">
            </div>
            <h3>${data.name}</h3>
            <p>${data.contanet}</p>
            
        </div>
            `
    } )
}





Service()