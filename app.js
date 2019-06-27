const express = require('express');         // пордключаем express
const app = express();
const mysql = require('mysql');             // подключаем mysql

app.use(express.static('dist'));            // указываем в какой папке лежит статика

let connect = mysql.createConnection({      // объект с данными для подключения
	host: 'localhost',                        // хост
	user: 'root',                             // юзер
	password: 'root',                         // пасс
	database: 'bakerydb'                      // имя БД
});

app.listen(3000, function () {              // вешаем прослушку на 3000 порт
	console.log('server is starting');
});

app.get('/', function (req, res) {          // при обращении к корню
	connect.query(                            // делаем запрос
			'SELECT * FROM new_table',            // выбрать всё из таблицы
			function (err, result) {              // ф-ия обработчик
				if (err) {                          // если ошибка, выбрасываем исключение
					throw new Error('!!! Error !!!');
				} else {                            // иначе
					console.log(result);              // в консоль результат
          res.render('index.html');         // рендерим главную страницу
				}
      }
	);
});