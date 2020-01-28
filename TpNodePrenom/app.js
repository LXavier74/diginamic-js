// server.js
// load the things we need
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('./index.ejs', {name:["Omer", "Marge"]});
});

app.get('/profile/:name', function(req, res) {
    res.render('./profile.ejs', {
        name:req.params.name
    });
});

app.listen(8080);
console.log('8080 is the magic port');



/*

var express = require("express");
const app = express()
var router = express.Router();

router.get('/', function(req, res) {res.render('index.ejs');});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

varserver = http.createServer(function(req, res) {res.writeHead(200, 
    { 'Content-Type': 'text/html'});res.write('<h1>Super application</h1>');res.write('<p>Hop une autre ligne !</p>');res.end('<p>Hello World!</p>');});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
*/