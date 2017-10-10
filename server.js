var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/pieService');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we have connected');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});
