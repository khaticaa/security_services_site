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




let s1bottom = document.querySelector(".s1bottom")
 function Service(){
    fetch('http://localhost:3000/services')
    .then(res => res.json())
    .then(data =>{
        // s1bottom.innerHTML = "";
        data.forEach(element => {
            s1bottom.innerHTML += `
            <div class="s1box">
            <div class="img">
                <img src="${element.Image}" alt="">
            </div>
            <h3>${element.name}</h3>
            <p>${element.contanet}</p>
            <i class="bi bi-heart"></i>
            <div class="buttons">
                <button>Delete</button>
                <button>Update</button>
            </div>
        </div>
            `
        })
    } )
}
Service()