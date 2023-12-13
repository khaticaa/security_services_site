
const serviceName = document.getElementById('serviceName');
const serviceContent = document.getElementById('serviceContent');
const serviceImage = document.getElementById('serviceImage');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let obj = {};
    let src = serviceImage.files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        obj = {
            Image: e.target.result,
            name: serviceName.value,
            contanet: serviceContent.value
        };

        axios.post('http://localhost:3000/services', obj)
            .then(res => {
                window.location = '../index.html';
            });
    };

    reader.readAsDataURL(src);
});
