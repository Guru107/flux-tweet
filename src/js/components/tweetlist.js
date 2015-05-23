/*
	This file contains the Definiation of TweetList Component

*/
var React = require('react'),
	Tweet = require('../components/tweet');//Include Tweet Component

var TweetList = React.createClass({
	render:function(){
		//Pass on each of the tweet object from the tweets collection to the Tweet Component.
		
		var content = this.props.tweets.map(function(tweet){
			return (
				<Tweet key={tweet.id} tweet = {tweet}/>
			)
		});
		return (
		<div className="row">
	       {content}
	    </div>
		)
	}
});

module.exports = TweetList;