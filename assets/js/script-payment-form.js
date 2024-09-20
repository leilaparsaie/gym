// ‌BMI

var printBmi = document.getElementById("bmi");
var jsNext = document.getElementById("js-next");
var age = document.getElementById("age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var form = document.getElementById("form-p-info");


jsNext.addEventListener("click", function validateForm() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    alert("لطفا اطلاعات خود را وارد کنید!");
    jsNext.removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
});

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  var result = "";
  if (bmi < 18.5) {
    result = "کم بود وزن";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "نرمال";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "اضافه وزن";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "چاق";
  } else if (35 <= bmi) {
    result = "خیلی چاق";
  }
  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode("شاخص توده ی بدنی شما :  (BMI) ");
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));

  h2.appendChild(b);
  h2.appendChild(r);
  h1.appendChild(t);

  printBmi.appendChild(h1);
  printBmi.appendChild(h2);
  jsNext.removeEventListener("click", countBmi);
  jsNext.removeEventListener("click", validateForm);
}
jsNext.addEventListener("click", countBmi);

// validation name

function validateInput(input) {
  const allowedCharsRegex = /^[^\d]+$/;

  if (!allowedCharsRegex.test(input.value)) {
    input.value = input.value.replace(/\d/g, '');
        alert('لطفا اطلاعات خود را بدرستی وارد کنید');
  }
}



//  price

  
function updatePrice() { 
  const selectedOption = document.getElementById("courses");
  const selectedValue = selectedOption.value;
  document.getElementById("price").textContent = selectedValue;
  document.getElementById("title-courses").textContent = ` دوره ی شما : ${
    selectedOption.options[selectedOption.selectedIndex].textContent
  } `;
}
