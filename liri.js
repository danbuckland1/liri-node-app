var Twitter = require('twitter');

var Spotify = require("node-spotify-api");

var env = require("dotenv").config();

var keys = require("./key");

var request = require("request");

var fs = require('fs');

var command = process.argv[2];

var command2 = process.argv[3];



var twitterFunction = function (){
  console.log("Retreived Tweets");
  console.log("-------------------");
  var client = new Twitter(keys.twitter);
  client.get('statuses/user_timeline', function(error, tweets, response) {
    if (!error) {
      // console.log(tweets[0].text);
      for(var i = 0; i < tweets.length; i++){
        console.log(tweets[i].text);
      }
    }
  
  }); 
}

var spotifyFunction = function(artist){
  console.log("Retreived Spotify Requests");
  console.log("------------------------------");
  var spotify = new Spotify(keys.spotify);
  spotify.search({ type: 'track', query: artist}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
  }
    console.log();

});
}

var doWhatItSays = function(){
  fs.readFile('./random.txt', "utf8", function(err, data) {
    var lines = data.split("\n");
      for(var i = 0; i < lines.length; i++){
        //;console.log(lines[i]);
        var command = lines[i].split(',');
        console.log(command);
        console.log(command[0]);
        if(command[0] === "spotify-this-song"){
          spotifyFunction(command[1]);
        }
        else if(command[0] === "my-tweets"){
          twitterFunction();
        }
      }
      //Math.floor(Math.random() * lines.length);
    // var dataArray = data.split(',');
    // console.log("Data result ", dataArray.length);
    // console.log("This is data ", data);
    // if(dataArray.length === 2){
    //   userInput(dataArray[0], dataArray[1]);
    // }
    // else if(dataArray.length === 1) {
    //   userInput(dataArray[0]);
    //   }
    
})
};




//omdb

var userInput = function(command){
  switch(command) {
    case "my-tweets":
        twitterFunction()
        break;

      case "spotify-this-song":
      spotifyFunction(process.argv[2]);
      break;

      case "do-what-it-says":
      doWhatItSays()
      break;

      default:
          console.log("hello");
  }
}

userInput(command);
