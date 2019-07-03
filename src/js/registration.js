const btnreg = document.querySelector('.regform__btnsend').firstElementChild;
const login = document.querySelector('#fieldlogin');
const passw = document.querySelector('#fieldpassw');
const email= document.querySelector('#fieldemail');



function checkField() {
  var reglogpass = /^[0-9]$/;
  var regmail = /^([0-9a-z_\.-]+)@([0-9a-z_\.-]+)\.([a-z]{2,7})$/;


  let log = reglogpass.test(login.value);
  console.log(log);
}



btnreg.addEventListener('click', checkField);
