var express = require('express');
var app = express();
const port = 80;

// view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    // res.send('Hello World');
    res.sendfile('index.html');
});

app.get('/hello', function (req, res) {
    var timer = Date.now();
    res.render('hello', {title: 'Hello', message: timer})
});

app.listen(port, function () {
    console.log("Listening on port " + port)
});
