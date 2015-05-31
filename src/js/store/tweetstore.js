/*
    This file contains the Store as defined by flux architecture
    Action -> Dispatcher -> Store -> View
     1_________________________________|
*/
var TweetDispatcher = require('../dispatcher/tweetdispatcher'),//Include dispatcher
    EventEmitter = require('events').EventEmitter,//Node's event emitter
    TweetConstants = require('../constants/TweetConstants'),//Action Constants
    assign = require('object-assign');


var CHANGE_EVENT = 'change';
var tweets = [];

function loadTweets(data){
    tweets = data;
}

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
   if(payload.action.actionType === TweetConstants.LOAD_TWEETS){
        loadTweets(payload.action.data);
        TweetStore.emitChange();
   }
   
    return true;
})
