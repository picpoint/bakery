const express = require('express');         // пордключаем express
const app = express();
const mysql = require('mysql');             // подключаем mysql

app.use(express.static('dist'));            // указываем в какой папке лежит статика

let conn = mysql.createConnection({      // объект с данными для подключения
	host: 'localhost',                        // хост
	user: 'root',                             // юзер
	password: 'root',                         // пасс
	database: 'bakerydb'                      // имя БД
});

conn.connect(function (err) {
	if (err) {
		throw new Error('!!! ERROR !!!' + err.message);
	} else {
		console.log('Connection ty MySql Server');
	}
});

app.listen(3000, function () {              // вешаем прослушку на 3000 порт
	console.log('server is starting');
});

app.get('/', function (req, res) {          // при обращении к корню
	conn.query(                            // делаем запрос
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