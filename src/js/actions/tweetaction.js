/*
	This file contains the Action as defined by flux architecture
	Action -> Dispatcher -> Store -> View
	 1_________________________________|
*/
var TweetDispatcher = require('../dispatcher/tweetdispatcher'),//Include the Dispatcher
	TweetConstants = require('../constants/tweetconstants');//Include Constants

var TweetAction = {
	//loadTweets action
	loadTweets:function(){
		console.log("TweetAction - loadTweets");
		//Send the action wrapped into an object to a function defined in the Dispatcher
		TweetDispatcher.handleViewAction({
			actionType:TweetConstants.LOAD_TWEETS,
			item:""
		})
	}

} 	
module.exports =TweetAction;