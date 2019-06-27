const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static('dist'));

let connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'bakerydb'
});

app.listen(3000, function () {
	console.log('server is starting');
});

app.get('/', function (req, res) {
	connect.query(
			'SELECT * FROM bakerydb.new_table',
			function (err, result) {
				if (err) {
					throw new Error('!!! Error !!!');
				} else {
					console.log(result);
          res.render('index.html');
				}
      }
	);
});