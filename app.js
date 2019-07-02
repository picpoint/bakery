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


conn.connect(function (err) {
	if (err) {
		throw new Error('!!! ERROR !!!' + err.message);
	} else {
		conn.query(
			'SELECT * FROM tablename',
			function (err, result) {
				if (err) {
					throw new Error('!!! ERROR !!! ' + err.message); //
				} else {
					console.log(result);
					for (let i = 0; i < result.length; i++) {
						console.log(result[i].name);
					}
				}
      }
		);
		console.log('Connection ty MySql Server');
	}
});



app.listen(3000, function () {              // вешаем прослушку на 3000 порт
	console.log('server is starting');
});


app.get('/', function (req, res) {          // при обращении к корню
	res.render('index.html');
});
