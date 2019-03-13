var path = require("path");

module.exports = function(app) {
  // Catchall to to lead to home page
  app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "home.html"));
    });

  app.get("/servey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
}
  