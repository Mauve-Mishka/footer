var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var SERVER_PORT = 5009;


var app = express();

app.use(cors());
app.use('/rooms/:id', express.static(__dirname + '/../client/dist'));


console.log('listening on port ', SERVER_PORT);
app.listen(SERVER_PORT);

module.exports = app;