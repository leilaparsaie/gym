
// payment page 
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
  }
  
  document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.cvv-input').value;
  }
  
  document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
  }
  
  document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
  }
  