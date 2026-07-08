const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(name.length < 3){
        alert("Full Name must be at least 3 characters.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Enter a valid email address.");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Registration Successful!");

    form.reset();

});