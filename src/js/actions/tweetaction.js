/*
	This file contains the Action as defined by flux architecture
	Action -> Dispatcher -> Store -> View
	 1_________________________________|
*/
var TweetDispatcher = require('../dispatcher/tweetdispatcher'), //Include the Dispatcher
    TweetConstants = require('../constants/tweetconstants'),
     request = require('superagent');; //Include Constants

var TweetAction = {
    //loadTweets action
    loadTweets: function() {
        console.log("TweetAction - loadTweets");

        //Send the action wrapped into an object to a function defined in the Dispatcher
        request.get('http://127.0.0.1:3004/').end(function(error, response) {
            if (!error) {
                var tweets = response.body;
                TweetDispatcher.handleViewAction({
                    actionType: TweetConstants.LOAD_TWEETS,
                    data: tweets
                });

            }

        });

    }

}
module.exports = TweetAction;
