var friends = require("../data/friends");

module.exports = function(app) {
    //app.post(path, callback [, callback ..])
    // path     - the path for which the middleware function is invoked
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    }); 

    app.post("/api/friends", function(req, res) { 
        user = req.body; 
    
        for (i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }
        // console.log(req.body.scores)

        var closestScore = 50;
        let bestMatchIndex = 0;
        for (i = 0; i < friends.length; i++) {
            var difference = 0; 
            var simpson = friends[i];
            for (j = 0; j < user.scores.length; j++) {
                difference += Math.abs(user.scores[i] - simpson.scores[i])
            }
            if (difference < closestScore) {
                bestMatchIndex = i;
                closestScore = difference;``
            }
        }

        var bestMatch = friends[bestMatchIndex];

        friends.push(user);

        // send back to browser the best friend match
        res.json(bestMatch);
    });


}
