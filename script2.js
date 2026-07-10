const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Check empty fields
    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all required fields.");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return;
    }

    // Password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    document.getElementById("popup").style.display = "flex";
    form.reset();
});
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function () {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});
const passwordInput = document.getElementById("password");
const strengthMessage = document.getElementById("strengthMessage");

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    if (password.length === 0) {
        strengthMessage.textContent = "";
    }
    else if (password.length < 6) {
        strengthMessage.textContent = "❌ Weak Password";
        strengthMessage.style.color = "red";
    }
    else if (password.length < 10) {
        strengthMessage.textContent = "🟡 Medium Password";
        strengthMessage.style.color = "orange";
    }
    else {
        strengthMessage.textContent = "✅ Strong Password";
        strengthMessage.style.color = "green";
    }

});
const fullname = document.getElementById("fullname");
const nameError = document.getElementById("nameError");

fullname.addEventListener("input", function () {

    if (fullname.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
    } else {
        nameError.textContent = "";
    }

});
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

email.addEventListener("input", function () {

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!pattern.test(email.value)) {
        emailError.textContent = "Enter a valid email.";
    } else {
        emailError.textContent = "";
    }

});
const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmError = document.getElementById("confirmError");

confirmPasswordInput.addEventListener("input", function () {

    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmError.textContent = "Passwords do not match.";
    } else {
        confirmError.textContent = "";
    }

});
function closePopup(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("registerForm").reset();

    // Clear password strength text
    document.getElementById("strengthMessage").textContent = "";

    // Clear validation messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
}