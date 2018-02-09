
var express = require('express');
var app = express();

/*
app.get('/', function (req, res) { // index.html can be served from ./ as default entry
  res.sendFile('/index.html', { root: __dirname });
});

app.get('/index.html', function (req, res) { // index.html can be served from ./
  res.sendFile('/index.html', { root: __dirname });
});
*/

app.use(express.static('assets')); // index.html and default entry can served from ./assets

app.get('/userform', function (req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  res.json(response);
  console.log('req useform url: ' + req.originalUrl);
});

app.use(function (req, res, next) {
  var msg = 'request endpoint not supported: method: ' +
   req.method + ' url: ' + req.originalUrl;

  res.status(404).send(msg);
  console.log(msg);
});

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('()Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
