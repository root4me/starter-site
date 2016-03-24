var express = require('express');
var app = express();
var path = require('path');

console.log(app.get('env'));

app.use('/css', express.static('app/css'));
app.use('/bower_components',express.static('bower_components'));
app.use('/js', express.static('app/js'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , 'app/index.html'));
});

app.listen(9000, function () {
  console.log('listening at http://localhost:9000');
});
