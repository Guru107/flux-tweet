/*
    This file contains the Store as defined by flux architecture
    Action -> Dispatcher -> Store -> View
     1_________________________________|
*/
var TweetDispatcher = require('../dispatcher/tweetdispatcher'),//Include dispatcher
    EventEmitter = require('events').EventEmitter,//Node's event emitter
    TweetConstants = require('../constants/TweetConstants'),//Action Constants
    assign = require('object-assign'),
    request = require('superagent');//to make network calls


var CHANGE_EVENT = 'change';
var tweets = [];

var TweetStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        console.log("Change event emitter");
        this.emit(CHANGE_EVENT);
    },
    getTweetState:function(){
        return {
            tweets:tweets
        }
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    }
});
module.exports = TweetStore;

TweetDispatcher.register(function(payload) {
    console.log("TweetStore - register payload: " + JSON.stringify(payload));
   request.get('http://127.0.0.1:3004/').end(function(error,response){
        if(!error){
            tweets = response.body;
            TweetStore.emitChange();
        }
            

   });
    return true;
})
