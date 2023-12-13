let id = new URLSearchParams(window.location.search).get("id")
const modalForm = document.querySelector('.category-form')
const name = document.querySelector('.name')
const category = document.querySelector('.category')
const submit = document.querySelector('.submit')
const modalImage = document.querySelector('.modalImage')
const plus = document.querySelector('.plus')
const file = document.querySelector('input[type="file"]')

axios.get(`http://localhost:3000/services/${id}`)
    .then(data => {
        modalImage.src = data.data.image
        name.value = data.data.name
        category.value = data.data.contanet
    })


modalForm.addEventListener("submit", (event) => {
    event.preventDefault()
    axios.put(`http://localhost:3000/services/${id}`, {
        Image: modalImage.src,
        name: name.value,
        contanet: category.value
    })
    window.location = "../index.html"
})

plus.addEventListener('click',()=>{
    file.click()
    file.addEventListener('input', (e) => {
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                modalImage.src = reader.result;
            }
        }
    })
})