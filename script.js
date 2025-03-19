function toggleMenu()
{
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".hamburgerIcon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail()
{
    let params =
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_6v4e9ch", "template_q7cadxv", params).then(alert("Your message has been sent!"))
}