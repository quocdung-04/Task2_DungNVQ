var form = document.getElementById("loginForm");
var emailInput = document.getElementById("email");
var pw = document.getElementById("password");
var btn = document.getElementById("togglePassword");
var remember = document.getElementById("remember");

btn.addEventListener("click", function () {
    if (pw.type === "password") {
        pw.type = "text";
        btn.textContent = "Hide";
    } else {
        pw.type = "password";
        btn.textContent = "Show";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = emailInput.value.trim().toLowerCase();
    var pass = pw.value;
    if (email.length == 0 || pass.length == 0) {
        alert("Please enter your email and password!");
        return;
    }
    if (remember.checked) {
        localStorage.setItem("currentUser", email);
    } else {
        sessionStorage.setItem("currentUser", email);
    }
    alert("Login successful!");
    window.location.href = "home.html";
});