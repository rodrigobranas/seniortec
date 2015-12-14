var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static("client"));

var messages = [
	{date: new Date(), nickname: "Ana", message: "Oi, quer tc?"},
	{date: new Date(), nickname: "Mãe Solteira", message: "Mãe solteira quer..."},
	{date: new Date(), nickname: "João", message: "Eu quero!"}
];

app.get("/messages", function (req, res) {
	res.json(messages);
});

app.post("/messages", function (req, res) {
	var message = req.body;
	messages.push(message);
	res.json(message);
});

app.listen(process.env.PORT || 3000);