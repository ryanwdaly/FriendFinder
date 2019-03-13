var friends = require("./../data/friends");

module.exports = function(app) {
    //app.post(path, callback [, callback ..])
    // path     - the path for which the middleware function is invoked
    app.get("./../data/friends", function(req, res) {
        res.json(friends);
    }); 

    
    app.post("./../data/friends", function(req, res) {
        console.log(req.body.scores)
    });
}
