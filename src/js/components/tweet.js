/*
 This file contains the Tweet Component
 It has the definiation of how a view of the component looks like.
*/
var React = require('react');

var Tweet = React.createClass({
	render:function(){
		var  tweet = this.props.tweet
		return (
			<div className="columns">
	            <div className="panel">
	               <div className="profile"> 
	               		<img src={tweet.user.profile_image_url}></img>
	               		<h5><a style={{color:"#"+tweet.user.profile_link_color}} href="#">{tweet.user.screen_name}</a></h5>
	               </div>
	                <p style={{color:"#"+tweet.user.profile_text_color}}>{tweet.text}</p>
	            </div>
	        </div>
		);
	}
});
module.exports = Tweet;