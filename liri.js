// require("dotenv").config();
// var fs = require("fs");
// var inquirer = require("inquirer");
// var spotify = new Spotify(keys.spotify);
// var keys = require("./keys.js");

var axios = require("axios");


var search = process.argv[2];

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