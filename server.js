var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});