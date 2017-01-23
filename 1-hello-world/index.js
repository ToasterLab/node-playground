var express = require("express");
var app = express();

app.get("/", function (req, res){
	res.send("<h1>Hello World</h1><marquee>we don't need another hero</marquee>")
});

app.listen(8080);
console.log("Greeting you at http://localhost:8080")