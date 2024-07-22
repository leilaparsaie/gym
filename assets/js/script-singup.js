// let signupForm = document.querySelector(".my-form");
// let password = document.getElementById("password");
// let confirmPassword = document.getElementById("confirm-password");

// signupForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log("Password:", password.value);
// });

// function onChange() {
//   if (confirmPassword.value === password.value) {
//     confirmPassword.setCustomValidity("");
//   } else {
//     confirmPassword.setCustomValidity("Passwords do not match!");
//   }
// }

// password.addEventListener("change", onChange);
// confirmPassword.addEventListener("change", onChange);


const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const errorMessage = document.querySelector('.error');
const btnRegister = document.querySelector('btnRegister');

btnRegister.addEventListener('click', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    errorMessage.textContent = 'رمزعبور مطابقت ندارند';
  } else {
    errorMessage.textContent = '';
  }
});

