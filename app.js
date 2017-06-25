const express = require('express');
const app = express();
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const c = console.log;
let port = process.env.PORT || 3000;


app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())