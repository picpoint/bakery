const express = require('express');                      // пордключаем express
const app = express();
const mysql = require('mysql');                          // подключаем mysql

app.use(express.static('dist'));                         // указываем в какой папке лежит статика

let conn = mysql.createConnection({                      // объект с данными для подключения
	host: 'localhost',                                     // хост
	user: 'root',                                          // юзер
	password: 'root',                                      // пасс
	database: 'bakerydb'                                   // имя БД
});


conn.connect(function (err) {                            // ф-ия коннекта
	if (err) {                                             // если ошибка
		throw new Error('!!! ERROR !!!' + err.message);      // выбрасываем исключение
	} else {                                               // иначе
		conn.query(                                          // делаем запрос
			'SELECT * FROM tablename',                         // выбрать всё из таблицы tablename
			function (err, result) {                           // вторым аргументом идт ф-ия
				if (err) {                                       // если ошибка
					throw new Error('!!! ERROR !!! ' + err.message); // выбрасываем исключение
				} else {                                         // иначе
					for (let i = 0; i < result.length; i++) {      // пробегаемся по результату
						console.log(result[i].name);                 // на каждом шаге выводим имя (поле в таблице)
					}
				}
      }
		);
		console.log('Connection ty MySql Server');           // если коннект произошёл к бд, выводим сообщение
	}
});



app.listen(3000, function () {                           // вешаем прослушку на 3000 порт
	console.log('server is starting');
});


app.get('/', function (req, res) {                       // при обращении к корню
	res.render('index.html');
});
