const form = document.querySelector("form");

const signup = document.querySelector(".sign-up");

const success = document.querySelector(".success");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    signup.classList.add("hide");
    success.classList.remove("hide");
})