//server.js

var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(bodyParser());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: 'hooray! welcome to our api!'});
});

server.use('/api', router);

server.use(express.static('~/nodeWorkspace/stormpath-express-app/views/login.html'));

server.listen(port);
console.log('Magic happens on port ' + port);



