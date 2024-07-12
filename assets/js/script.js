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


// coach