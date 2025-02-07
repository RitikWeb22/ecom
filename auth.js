document.getElementById("signUpForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let password = document.getElementById("signUpPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Sign up successful!");
        this.reset();
    }
});

document.getElementById("signInForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "index.html"; // Redirect to home

    this.reset();
});