var friendsData = require('../data/friends.js');
var friends = require('../data/friends.js');

module.exports = function(app) {
	

	
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	
	app.post('/api/friends', function(req, res) {
		
		var userData= req.body;
		

        var userScores = userData.scores;
		var userName = userData.name;
		var userImage = userData.image;
		var totalDifference = 10000;

		
		for (var i = 0; i < friends.length; i++) {
            var diff = 0;
			for (var j = 0; j < userData.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userAnswer[j]);
            }
            
            if (diff < totalDifference) {
				

				bestMatch.Difference = totalDifference;
				bestMatch.name = friends[i].name;
				bestMatch.image = friends[i].photo;
            }
            
        }

		
		friends.push(userData);


		res.json(bestMatch);
	});
};
		
