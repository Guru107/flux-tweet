/*
	This file contains the Dispatcher as defined by flux architecture
	
	Action -> Dispatcher -> Store -> View
	 1_________________________________|
*/
var Dispatcher = require('flux').Dispatcher,//Include the Dispatcher from the flux library
	assign = require('object-assign');//Include object-assign library
//Dispatcher definiation.
var TweetDispatcher = assign(new Dispatcher(),{
	//Function to handle actions from the view.
	//action object passed from the TweetAction 
	handleViewAction:function(action){
		console.log("TweetDispatcher - handleViewAction action: "+JSON.stringify(action));
		/*
		Wrap the action object into another object with information regarding the source of the action
		and dispatch it to the Store.	
		*/
		this.dispatch({
			source:'VIEW_ACTION',
			action:action
		})
	}
});
module.exports = TweetDispatcher;