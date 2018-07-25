var Twitter = require('twitter');

var env = require("dotenv").config();

var keys = require("./key");

var request = require("request");

var twitterFunction = function (){
  console.log("retreiving tweets");
  var client = new Twitter(keys.twitter);
  client.get('statuses/user_timeline', function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
}
//for loop tweets and print them to console.

twitterFunction();
  // var params = {screen_name: 'Truffle_Poochie'};
  // client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //   if (!error) {
  //     console.log(tweets);
  //   }
  // });
