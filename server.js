//server.js

var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var path = require('path');


server.use(bodyParser());

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

server.get('/', function(req, res) {
	res.render("login.ejs");
});

server.use(express.static(__dirname + '/static'));

server.listen(port);
console.log('Magic happens on port ' + port);



