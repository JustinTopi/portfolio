let contact = document.querySelector('.tooltip');

function userNotification() {
    contact.value = "Coming Soon..."
    contact.style.color = "red";
    contact.disabled = true;
}

contact.addEventListener('click', userNotification);


let form = document.getElementById("contactForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);