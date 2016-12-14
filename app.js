var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.set('view engine', 'pug');
app.locals.pretty = true;

var api = require('./api.js')
require('./api')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
