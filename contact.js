document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(`Thank you, ${name}! We have received your message.`);
    
    // Optionally, clear the form
    this.reset();
});
