const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static('dist'));

let connect = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'bakerydb'
});

app.listen(3000, function () {
	console.log('server is starting');
});

app.get('/', function (req, res) {
	connect.query(
			'SELECT * FROM new_table',
			function (err, result) {
				if (err) {
					throw new Error('!!! Error !!!' + err.message);
				} else {
					console.log(result);
				}
      }
	);
	res.render('index.html');
});