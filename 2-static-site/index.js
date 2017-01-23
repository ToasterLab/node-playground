var express = require("express");
var logger = require("morgan"); // logs everything passed
var path = require("path");

var app = express();

/*
	Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
*/

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

// note that I can also serve up static subdirectories in public e.g. public/css, allowing access as if css was in root i.e. can use /styles.css instead of /css/styles.css or /public/css/styles.css

app.listen(8080);
