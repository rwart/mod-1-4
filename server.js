
var express = require('express');
var app = express();
app.use(express.static('assets')); // index.html is served from ./assets

/*
app.get('/', function (req, res) { // index.html can be served from ./
  res.sendFile('/index.html');
});
*/

app.get('/userform', function (req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  res.json(response);
  console.log('req useform url: ' + req.originalUrl);
});

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('()Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
