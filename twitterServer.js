/*
	A Simple Server to fetch user tweets.
	Send the request of the sample flux application to fetch user tweets to this server.

*/
var http = require('http'),
//nodejs implementation of Twitter API
	Twitter = require('twitter'),
	//This module contains twitter api access keys. Generate your on keys on dev.twitter.com
	config = require('./config');
http.createServer(function(req,res){
	 var headers = {};
  // IE8 does not allow domains to be specified, just the *
  // headers["Access-Control-Allow-Origin"] = req.headers.origin;
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
  headers["Access-Control-Allow-Credentials"] = false;
  headers["Access-Control-Max-Age"] = '86400'; // 24 hours
  headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
  headers["Content-Type"] = "application/json";
  res.writeHead(200, headers);

  //Create an object of Twitter client
	var client = new Twitter({
		consumer_key:config.consumer_key,
		consumer_secret:config.consumer_secret,
		access_token_key:config.access_token_key,
		access_token_secret:config.access_token_secret
	});
	//Pass the user name
	var params = {screen_name:'Replace_This_String_With_Your_Username_On_Twitter'};
	//Send a request to fetch user tweets
	client.get('statuses/user_timeline', params, function(error, tweets, response){
			  if (!error) {
			  	//Relay the response back to the application with the tweets.
			    res.end(JSON.stringify(tweets));
			  }
		});
}).listen('3004','localhost');
console.log('Server running at http://127.0.0.1:3004/');