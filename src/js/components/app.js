/*
	This file contains the main component, also known as controller-view.

	Controller-Views are the one which interact with the Store to get the data
	and pass it on to the child components

*/
var React = require('react'),
	NavBar = require('../components/navbar'),// Include top nav bar component
	TweetList = require('../components/tweetlist'),//Include tweet list component
	TweetStore = require('../store/tweetstore');//Include the Store
//App Component Definiation
var App = React.createClass({
	//Set the initial state of the view. 
	getInitialState:function(){
		return {
			tweets:[]
		};
	},
	render:function(){
		//Incude sub components
		//Pass on the tweets to the TweetList Component
		return (
			<div>
				<NavBar/>
				<TweetList tweets={this.state.tweets}/>
			</div>
		);
	},
	//Register 'change' event listener when the component mounts
	componentDidMount:function(){
		TweetStore.addChangeListener(this._onChange);
	},
	//Remove  the 'change' listener when the component unmounts.
	componentWillUnmount:function(){
		TweetStore.removeChangeListener(this._onChange);
	},
	//The callback which is invoked when 'change' event occurs.
	_onChange:function(){
		this.setState(TweetStore.getTweetState());
	}
});

module.exports = App;