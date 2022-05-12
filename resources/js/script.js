
const sendMail = (params) => {
    let tempParams = {
        from_name:document.getElementById("fromName").value,
        message:document.getElementById("msg").value
    };
    emailjs.send('service_cs9xtft', 'template_niw74fn', tempParams)
    .then(function(res){
        alert("Message sent successfully!")
    },
    function(error) {
        alert("Failed... Please try again later.")
    }
    )
}

let but = document.getElementById('sentButton');
but.addEventListener('click', sendMail)