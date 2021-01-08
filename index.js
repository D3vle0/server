const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

const PORT =  4000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: '1234DSFs@adf1234!@#$asd',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function (req, res) {
    res.render("index");
});

app.listen(PORT, function () {
    console.log('Connected port!!!'+ PORT);
});
