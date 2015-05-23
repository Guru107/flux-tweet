/*
	This is the file that renders the React application in the DOM;
	It mounts the application on the mount point provided.
*/
var React = require('react'),
	App = require('./components/app');

//Render the app in the dom
React.render(
	<App/>,
	document.getElementById("app-mount-point")
)

