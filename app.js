const express = require('express');
const app = express();


app.use(express.static('dist'));

app.listen(3000, function () {
	console.log('server is starting');
});

app.get('/', function (req, res) {
	res.render('index.html');
});