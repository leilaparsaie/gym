// login form

// link to login and register
const loginbtn = document.querySelector("#login");
const registerbtn = document.querySelector("#register");
const borderbottom = document.querySelector(".borderbottom");
const contantForm = document.querySelector(".form");

registerbtn.addEventListener("click", () => {
  borderbottom.style.transform = "translateX(40px)";
  contantForm.innerHTML = `<div>
          <input type="text" placeholder="نام کاربری :">        
          <input type="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required placeholder="کلمه عبور :">
          <input type="password" id="confirm_password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required placeholder=" تکرار کلمه عبور :">
          <p class="error p-1"></p>
          <button type="register" onclick="" class="btn btnRegister">ثبت نام</button>
        </div>`;
});
// confirm_password
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const errorMessage = document.querySelector(".error");
const btnRegister = document.querySelector(".btnRegister");

btnRegister.addEventListener("click", (event) => {
  event.preventDefault();
  if (confirmPasswordInput.value !== passwordInput.value) {
    errorMessage.textContent = "رمزعبور مطابقت ندارند";
  } else {
    errorMessage.textContent = "";
  }
});

loginbtn.addEventListener("click", () => {
  borderbottom.style.transform = "translateX(-40px)";
  contantForm.innerHTML = `<div class="password-field">
          <input type="text" placeholder="نام کاربری :">        
          <input type="password" class="active" id="passwordLogin" placeholder="کلمه عبور :">
          <i id="iconEye" class="fa fa-eye-slash"></i>
          <p class="error-pass p-1"></p>
          <a href="#" id="forgot-js" class="forgotPass"  data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">فراموشی رمز عبور</a>
          <button type="Login" class="btn btn-login btn-login-form">ورود</button>
        </div>`;

  // validatePassword

  const passwordInput = document.getElementById("passwordLogin");
  const errorPassElement = document.querySelector(".error-pass");
  const btnLogin = document.querySelector(".btn-login-form");

  // backend*****
  const correctPassword = "123456";

  btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    const enteredPassword = passwordInput.value.toString();

    if (enteredPassword.trim() === "") {
      errorPassElement.textContent = "لطفا رمز عبور خود را وارد کنید";
      return;
    }

    if (enteredPassword !== correctPassword) {
      errorPassElement.textContent = "رمز عبور صحیح نیست";

      setTimeout(() => {
        errorPassElement.textContent = "";
      }, 3000);
    } else {
 
      // اگر رمز عبور صحیح بود، عملیات ورود را انجام دهید
      // ... کد مربوط به ورود موفق
    }
  });

  // end validatePassword

  //start iconEye
  const icon = document.getElementById("iconEye");

  icon.addEventListener("click", function () {
    if (passwordLogin.className == "active") {
      passwordLogin.setAttribute("type", "text");
      icon.className = "fa fa-eye";
      passwordLogin.className = "";
    } else {
      passwordLogin.setAttribute("type","password");
      icon.className = "fa fa-eye-slash";
      passwordLogin.className = "active";
    }
  });
  // end iconEye
});
// start mobile number
const mobileInput = document.getElementById("mobileNumber");
const pattern = /^09[0-9]{9}$/;

mobileInput.addEventListener("input", () => {
  if (pattern.test(mobileInput.value)) {
    mobileInput.setCustomValidity("");
  } else {
    mobileInput.setCustomValidity(
      "لطفا شماره موبایل را به صورت صحیح وارد کنید."
    );
  }
});
