var path = require("path");

module.exports = function(app) {
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey/survey.html"));
  });
  // Catchall to to lead to home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home/home.html"));
  });
}
