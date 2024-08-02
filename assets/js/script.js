  

// start menu
    const menu = document.querySelector(".menu");
    const menuLinks = menu.querySelectorAll("a");
    const menuLinkActive = menu.querySelector("li.active");
    const activeClass = "active";

    doCalculations(menuLinkActive);

    for (const menuLink of menuLinks) {
      menuLink.addEventListener("click", (e) => e.preventDefault());

      menuLink.addEventListener("mouseenter", function () {
        menu.querySelector("li.active").classList.remove(activeClass);
        menuLink.parentElement.classList.add(activeClass);
        doCalculations(menuLink);
      });
    }

    function doCalculations(link) {
      menu.style.setProperty("--transformJS", `${link.offsetLeft}px`);
      menu.style.setProperty("--widthJS", `${link.offsetWidth}px`);
    }

    window.addEventListener("resize", function () {
      const menuLinkActive = menu.querySelector("li.active");
      doCalculations(menuLinkActive);
});
// end menu

// start parallax
window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY; // موقعیت فعلی اسکرول عمودی را بدست آورید
  
  var elementWidth = document.getElementById('myElement').offsetWidth; // عرض عنصر را بدست آورید
  var newLeft = scrollTop * (elementWidth / window.innerHeight) * 1; // موقعیت جدید عنصر را محاسبه کنید
  document.getElementById('myElement').style.left = newLeft + 'px'; // موقعیت جدید عنصر را تنظیم کنید

  var elementHeight = document.getElementById('myElement1').offsetHeight; // عرض عنصر را بدست آورید
  var newTop = scrollTop * (elementHeight / window.innerHeight) * 1; // موقعیت جدید عنصر را محاسبه کنید
  document.getElementById('myElement1').style.left = newTop + 'px'; // موقعیت جدید عنصر را تنظیم کنید

  var element2Height = document.getElementById('myElement2').offsetHeight; // عرض عنصر را بدست آورید
  var newTopelm2 = scrollTop * (element2Height / window.innerHeight) * 1; // موقعیت جدید عنصر را محاسبه کنید
  document.getElementById('myElement2').style.right = newTopelm2 + 'px'; // موقعیت جدید عنصر را تنظیم کنید

});

//  end parallax


// start showcase

const content = document.getElementById('content');

const optionHTML = {
  option1:'<div class="col-12 col-lg-12 pt-5 " id="content">\
            <div class="d-flex flex-lg-row flex-column show ">\
              <div class="col-12 col-lg-6 order-1 order-lg-0 align-content-center title-showcase-descreptor ">\
                 <h2>مدرنترین دستگاه ها و تجهیزات ورزشی</h2>\
                 <p> جدیدترین و بروزترین دستگاه های ورزشی در باشگاه .</p>\
              </div>\
              <div class="col-12 col-lg-6 img-showCase"> \
                <img src="assets/img/Sports courses.jpeg" alt="" class="img-fluid">\
              </div>\
            </div>\
          </div>',
  option2: '<div class="d-flex flex-lg-row flex-column  show ">\
            <div class="col-12 col-lg-6 order-1 order-lg-0 align-content-center title-showcase-descreptor">\
            <h2>تغذیه در ورزش</h2>\
            <p>ورزشکارها و عاشقان فیتنس و تناسب اندام همیشه دنبال روش‌های مختلفی برای \
            بهبود کارایی و رسیدن به اهداف‌شان هستند. تغذیه‌ی خوب می‌تواند کمک کند\
             تا بدن‌تان عملکرد بهتری داشته باشد و بعد از تمرین و ورزش هم سریع‌تر بازیابی بشود.\
             مصرف بهینه‌ی مواد مغذی قبل از ورزش، نه تنها کمک می‌کند کارایی‌تان را به حداکثر ممکن برسانید، \
            بلکه آسیب عضلانی را هم به حداقل کاهش می‌دهدداشتن یک رژیم غذایی مناسب و آگاهانه برای قبل از ورزش و\
             همینطور بعد از انجام حرکات ورزشی در رسیدن به تناسب اندام دلخواه می تواند تا حد قابل توجهی موثر باشد.</p>\
            </div>\
            <div class="col-12 col-lg-6 img-showCase">\
            <img src="assets/img/food.jpg" alt="" class="img-fluid">\
            </div>\
            </div>',
  option3:   ' <div class="d-flex flex-lg-row flex-column  show ">\
  <div class="col-12 col-lg-6 order-1 order-lg-0 align-content-center title-showcase-descreptor">\
        <h2>تغذیه ورزشکاران</h2>\
        <p>یکی از بزرگ‌ترین مشکلاتی که این روزها مردم در دنیا با آن سروکله می‌زنند،‌\
        داستان اضافه وزن است. کم شدن فعالیت‌های فیزیکی، زندگی دست و پاگیر شهری، تغییر سبک غذایی، اضافه\
          شدن فست فودها و شیرینی‌ها به برنامه روزانه غذایی، رژیم لاغری شکم و بسیاری موارد دیگر، حالا معضلی\
          به نام اضافه وزن را هم به دیگر مشکلات مردم دنیا اضافه کرده است.\
        متخصصان تغذیه، برای حل این مشکل، رژیم‌های غذایی مختلفی را ابداع کرده‌اند تا بتوانند به افرادی که از اضافه\
        وزن رنج می‌برند، کمک کنند. نکته مهم این است که همه این رژیم‌های غذایی برای تمامی افراد مناسب نیستند.</p>\
   </div>\
  <div class="col-12 col-lg-6 img-showCase">\
    <img src="assets/img/Slimming diets.jpg" alt="" class="img-fluid">\
  </div>\
</div>',
  option4:' <div class="d-flex flex-lg-row flex-column show ">\
              <div class="col-12 col-lg-6 order-1 order-lg-0 align-content-center title-showcase-descreptor">\
                <h2>باشگاه ...</h2>\
                <p>باشگاه همه روزه از ساعت 7 صبح تا 24  میزبان همه ی ورزشکاران عزیز می باشد</p>\
              </div>\
              <div class="col-12 col-lg-6 img-showCase">\
                <img src="assets/img/time.jpg" alt="" class="img-fluid">\
              </div>\
            </div>'
};
const optionBtns = document.querySelectorAll('.option-btn');

optionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
   const optionId = this.id; 
   content.innerHTML = optionHTML[optionId];
   this.classList.add('noFilter');
   optionBtns.forEach(otherOption => {
    if (otherOption !== this) {
      otherOption.classList.remove('noFilter');
    }
  });
  
   
    });
  
  });


// end showcase


// login form

const RegisterJs = document.querySelector('#Register-js'); // Assuming correct ID
const containerLogin = document.querySelector('.container-login'); // Assuming correct class

RegisterJs.addEventListener('click', () => {
  // Check if the animation is already running to prevent stacking
  if (!containerLogin.classList.contains('animated')) {
    containerLogin.classList.add('animated'); // Add animated class
    setTimeout(() => {
      containerLogin.style.transform = 'translateY(0px)'; // Apply transform after class addition
      containerLogin.classList.remove('animated');
    }, 0); // Set a small delay to ensure class is applied first
  }
});

  // link to login and register
    const loginbtn = document.querySelector('#login');
    const registerbtn = document.querySelector('#register');
    const borderbottom = document.querySelector('.borderbottom');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const contantForm = document.querySelector('.form');


    registerbtn.addEventListener('click', () => {
      borderbottom.style.transform = 'translateX(40px)';
      contantForm.innerHTML=`<div>
              <input type="text" placeholder="نام کاربری :">        
              <input type="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required placeholder="کلمه عبور :">
              <input type="password" id="confirm_password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required placeholder=" تکرار کلمه عبور :">
              <p class="error p-1"></p>
              <button type="register" onclick="" class="btn btnRegister">ثبت نام</button>
            </div>`
  
    });
      // confirm_password
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm_password');
      const errorMessage = document.querySelector('.error');
      const btnRegister = document.querySelector('.btnRegister');

      btnRegister.addEventListener('click', () => {
        if (confirmPasswordInput.value !== passwordInput.value) {
          errorMessage.textContent = 'رمزعبور مطابقت ندارند';
        } else {
          errorMessage.textContent = '';
        }
  });

    loginbtn.addEventListener('click', () => {
      borderbottom.style.transform = 'translateX(-40px)';
      contantForm.innerHTML=`<div class="password-field">
              <input type="text" placeholder="نام کاربری :">        
              <input type="password" class="active" id="passwordLogin" placeholder="کلمه عبور :">
              <i id="iconEye" class="fa fa-eye-slash"></i>
              <p class="error-pass p-1"></p>
              <a href="#" id="forgot-js" class="forgotPass">فراموشی رمز عبور</a>
              <button type="Login" class="btn btn-login btn-login-form">ورود</button>
            </div>`
       // validatePassword
    
            const passwordLogin = document.getElementById('passwordLogin');
            const enteredPassword = passwordInput.value.toString();
          
            // backend*****
            const correctPassword = "123456";
          
            // عنصر پیام خطا
            const errorPassElement = document.querySelector('.error-pass');
            const btnLogin = document.querySelector('.btn-login-form');
          
            btnLogin.addEventListener('click', () => {
            if (enteredPassword !== correctPassword) {
                errorPassElement.textContent = 'رمز عبور صحیح نیست';
                // console.log("error");
                // errorPassElement.style.display = 'block';
            } else {
              console.log("hello");
                // اگر رمز عبور صحیح بود، عملیات ورود را انجام دهید
                // ... کد مربوط به ورود موفق
            }
          });
          
          // end validatePassword

        //start iconEye
            const icon = document.getElementById('iconEye');

            icon.addEventListener('click', function () {

            if(passwordLogin.className == 'active') {
                passwordLogin.setAttribute('type', 'text');
                icon.className = 'fa fa-eye';
              passwordLogin.className = '';

            } else {
                passwordLogin.setAttribute('type', 'password');
                icon.className = 'fa fa-eye-slash';
              passwordLogin.className = 'active';
            }
        
            });
         // end iconEye

        //  start forgotForm
        const forgotForm = document.getElementById('forgot-js');
        const forgotFormEl = document.getElementById('forgotForm'); 
        const formRegister = document.getElementById('formRegister-js'); 

        forgotForm.addEventListener('click', function () {
          forgotFormEl.style.display = 'block';
          formRegister.style.display = 'none';
        });
        // end forgotForm

    });

    // btn close
     
    const btnClose = document.querySelector('.btn-close-login');
    const formClose = document.querySelector('.container-login');
    const forgotFormEl = document.getElementById('forgotForm'); 
    const formRegister = document.getElementById('formRegister-js'); 

    // 
    btnClose.addEventListener('click', () => {
          formClose.style.transform = 'translateY(-1000px)'; // یا هر روش دیگری برای مخفی کردن عنصر
          forgotFormEl.style.display = 'none';
          formRegister.style.display = 'flex';
     
        });

     const closeButton = document.querySelectorAll('#btn-close');
      closeButton.forEach(button => {
          button.addEventListener('click', () => {
              // پیدا کردن عنصر والد نزدیک‌ترین با استفاده از کلاس
              const parentElement = button.closest('.parent-class'); // جایگزین .parent-class با کلاس مورد نظر خود کنید

              parentElement.style.transform = 'translateY(-1000px)' // برای مخفی کردن عنصر
          });
      });


    // login-fixed
    const loginFixed = document.querySelector('.login-fixed');
    loginFixed.addEventListener('click', () => {
      containerLogin.style.transform = 'translateY(0px)'; 

    });
    // end login-fixed

    // start contact form
 
    // const toggleContact = document.querySelector('.toggle-contact'); 
    // const containerContact = document.querySelector('.containerContact');
    // const closeContact = document.querySelector('.close-contact'); 

    // toggleContact.addEventListener('click', () =>{
    //   containerContact.classList.add("active-contact");

    // });
    // closeContact.addEventListener('click', () =>{
    //   containerContact.classList.remove("active-contact");
    // });

    const showContact = document.querySelector('.show-contact');
    const btnContactjs = document.querySelectorAll('.btn-contact-js');

    btnContactjs.forEach(btn => {
      btn.addEventListener('click', (event) => {
        // alert('Hello, world!');
          const optionId = event.target.id;
          showContact.innerHTML = '';
          switch (optionId) {
              case 'btn-insta':
                  showContact.innerHTML = '@khashayar-gym';
                  break;
              case 'btn-tele':
                  showContact.innerHTML = '@tel-khashayar_gym';
                  break;
              case 'btn-whats':
                  showContact.innerHTML = '#09171223698';
                  break; 
              case 'btn-sms':
                  showContact.innerHTML = '#09388547414';
                  break;       
            
          }
      });
  });

  const iconCalls = document.querySelectorAll('.call'); // توجه کنید که به جای singular به plural تغییر کرده است
  const containerContact = document.querySelector('.containerContact');
  
  iconCalls.forEach(iconCall => { // با استفاده از forEach برای هر دکمه یک EventListener اضافه می کنیم
      iconCall.addEventListener('click', () => {
         
          containerContact.style.transform = 'translateY(100px)';
         
      });
  });
//   document.addEventListener('click', (event) => {
//     // بررسی اینکه آیا کلیک روی عنصر containerContact یا یکی از فرزندان آن نبوده است
//     if (!event.target.closest('.containerContact')) {
//         containerContact.style.transform = 'translateY(-1376px)'; // برگرداندن فرم به حالت اولیه
//     }
// });
  
    // end contact form

   