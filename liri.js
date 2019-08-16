// require("dotenv").config();
// var fs = require("fs");
// var inquirer = require("inquirer");
// var spotify = new Spotify(keys.spotify);
// var keys = require("./keys.js");

var axios = require("axios");
var moment = require('moment');
var search = process.argv[3];
var input = process.argv[2];

if (input==="movie-this"){
axios.get("http://www.omdbapi.com/?t=" +search+ "&y=&plot=short&apikey=trilogy")
.then(
  function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year Released: " + response.data.Year);
    console.log("iMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
    console.log("Produced in: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
  })
  .catch(function(error) {
    if (error.response) {    
    }
  });
}if (input==="concert-this"){
    axios.get("https://rest.bandsintown.com/artists/"+search+"/events?app_id=codingbootcamp")
    .then(function(response) {   
    var results = response.data
    if (results.length===0){
        console.log("Bummer, it doesn't look like " +search+ " has any upcoming shows! Try another search.")
    }else {      
    console.log("Upcoming Shows For: " + search);
    for (var result of results){
    var eventDate =  moment(result.datetime).format("MMM Do YY");
    console.log("Venue: " + result.venue.name);
    console.log("Venue Location: "+ result.venue.city + ", " + result.venue.region);
    console.log("Event Date: "+ eventDate);
    console.log("-----------------------------")
        }   
    }

})
    .catch(function(error) {
    if (error.response) {    
        }
    });
}
