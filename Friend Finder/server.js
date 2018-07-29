var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./app/routing/html-routes.js');
var ApiRoutes = require('./app/routing/api-routes.js');
var friends = require('./app/data/friends.js');


var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});