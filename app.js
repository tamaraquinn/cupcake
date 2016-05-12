var express = require("express");
var app = express ();
var bodyParser = require("body-parser");
var csv = require("ya-csv");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/static'));

app.get('/cupcake', function(request, response) {
    response.send('Yummy Cupcakes');
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post('/signup', function(request, response) {
    var tamara_name = request.body.visitorName;
    var tamara_email = request.body.visitorEmail;
    
    var database = csv.createCsvFileWriter("signingup.csv", {flags: "a"});
    console.log("Database" + database);
    var data = [tamara_name,tamara_email];
    database.writeRecord(data);
    
    database.writeStream.end();
    
    response.send("blah" + tamara_name);
});

app.listen((process.env.PORT || 8000), function() {
    console.log('Welcome ' + (process.env.PORT || 8000));
});





