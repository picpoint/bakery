const mysql = require('mysql');
const btnreg = document.querySelector('.regform__btnsend').firstElementChild;
const login = document.querySelector('#fieldlogin');
const passw = document.querySelector('#fieldpassw');
const email= document.querySelector('#fieldemail');


let conn = mysql.createConnection({                      // объект с данными для подключения
  host: 'localhost',                                     // хост
  user: 'root',                                          // юзер
  password: 'root',                                      // пасс
  database: 'bakerydb'                                   // имя БД
});

/*
function checkField() {
  var reglogpass = /[0-9][^@]/g;
  var regmail = /^([0-9a-z_\.-]+)@([0-9a-z_\.-]+)\.([a-z]{2,7})$/;

  let log = reglogpass.test(login.value);
  console.log(log);
}
*/



function writeData() {
  let loguser = login.value;
  let passuser = passw.value;
  let emailuser = email.value;

  conn.connect(function (err) {
    if (err) {
      throw new Error('Error to connect' + err.message);
    } else {
      conn.query(
        'INSERT INTO userdata (login, password, email) VALUES (ivan, qwerty, ivan@mail.ru);',
        function (err, result) {
          if (err) {
            throw new Error('error to write data' + err.message);
          } else {
            console.log(result);
          }
        }
      );
    }
  });


  console.log(loguser);
  console.log(passuser);
  console.log(emailuser);
}


btnreg.addEventListener('click', writeData);

