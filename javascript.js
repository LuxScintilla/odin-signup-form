const form = document.querySelector(".form");
const inputField = document.querySelector("input");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".submit-button");

function checkPassword() {
    if(password.value === confirmPassword.value) {
        password.style.backgroundColor = "rgba(0, 255, 0, 0.1)"
        confirmPassword.style.backgroundColor = "rgba(0, 255, 0, 0.1)"
    } else {
        password.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
        confirmPassword.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
    }
}
