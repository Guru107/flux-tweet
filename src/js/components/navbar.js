var React = require('react'),
	TweetAction = require('../actions/tweetaction'),//Include the Action
	TweetStore = require('../store/tweetstore');//Include the store
//Navigation Bar Component
var NavBar = React.createClass({
	loadTweets:function(){
		console.log("NavBar - loadTweets");
		//Call the function from the Action to load the tweets
		TweetAction.loadTweets();
	},
	render:function(){
		return (
			
			<nav className="top-bar" data-topbar role="navigation">
		        <ul className="title-area">
		            <li className="name">
		                <h2><a href="#">Twitter Flux</a></h2>
		            </li>
		            <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
		        </ul>
		        <section className="top-bar-section">
		            <ul className="left">
		                <li className="divider"></li>
		                <li><a onClick={this.loadTweets}>Load Tweets</a></li>
		            </ul>
		        </section>

    		</nav>
    		
    		
		);
	}
});
module.exports = NavBar;