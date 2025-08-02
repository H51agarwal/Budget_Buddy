// Sign up form 

document.getElementById("SignUp_03").addEventListener("click", function () {
    window.location.href = "signUp.html";
});

document.getElementById("SignUp_01").addEventListener("click", function(){
    window.location.href = "signUp.html";
});

document.getElementById("SignUp_02").addEventListener("click", function(){
    window.location.href = "signUp.html";
});

// Light-dark mode switching

const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
