var path = require("path");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey/survey.html"));
  });

  app.get("/result", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/result.html"))
  })
}
