var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require('./app/routing/html-routes.js');
var ApiRoutes = require('./app/routing/api-routes.js');
var friends = require('./app/data/friends.js');


var app = express();
var PORT = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "",
  database: "friendfinder"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"))
    {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index.handlebars", { plans: data });
    
});
  
  app.post("/names", function(req, res) {
    connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
    
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });

app.get("/names", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"))
    {
      if (err) {
        return res.status(500).end();
      }
  
      res.json(data);
  });
});

 

  app.put("/names/:id", function(req, res) {
    connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
      if (err) {
    
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
      
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"))
    {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index.handlebars", { plans: data });
    
});
  
  app.post("/pictures", function(req, res) {
    connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
    
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });

app.get("/pictures", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"))
    {
      if (err) {
        return res.status(500).end();
      }
  
      res.json(data);
  });
});

 

  app.put("/pictures/:id", function(req, res) {
    connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
      if (err) {
    
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
      
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });
  

app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
  });
