require("dotenv").config();
var keys = require("./keys.js").spotify;
var fs = require("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require('moment');
var search = process.argv.slice(3).join(" ");
var input = process.argv[2];
var spotify = new Spotify({
   id: keys.id,
   secret: keys.secret,
});

// var inquirer = require("inquirer");

if (input==="movie-this"){
    if(search === undefined){
    axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy")
.then(
  function(response) {
    console.log("You didn't enter anything! If you haven't watched Mr. Nobody, then you should! It's on Netflix!")
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
}else{
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
 }
}
if (input==="concert-this"){
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

if (input==="spotify-this-song"){
spotify.search({ type: "track", query: search }, function(err, data) {
  if (err) {
    return console.log("Error occurred: " + err);
  }else{ 
    console.log("TOP 5 SEARCH RESULTS")
  for (i=0; i<5; i++){
    var artistName = data.tracks.items[i].artists[0].name;
    var songName = data.tracks.items[i].name;
    var previewLink = data.tracks.items[i].preview_url;
    var albumName = data.tracks.items[i].album.name
    console.log("Artist: " + artistName);
    console.log("Song Name: " + songName);
    console.log("Preview Link: " + previewLink);
    console.log("Album: " + albumName);
    console.log("-----------------------------")
        }
      }
    });
  }

//DO WHAT IT SAYS 
  if (input==="do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }else {
      var dataArr = data.split(",");
       if(dataArr[5]==="spotify-this-song"){
        spotify.search({ type: "track", query: dataArr[6] }, function(err, data) {
          if (err) {
            return console.log("Error occurred: " + err);
            }else{     
              console.log("LIRI THOUGHT YOU MIGHT LIKE THESE SONGS:")
            for (i=0; i<5; i++){
            var artistName = data.tracks.items[i].artists[0].name;
            var songName = data.tracks.items[i].name;
            var previewLink = data.tracks.items[i].preview_url;
            var albumName = data.tracks.items[i].album.name
        
            console.log("-----------------------------")
            console.log("Artist: " + artistName);
            console.log("Song Name: " + songName);
            console.log("Preview Link: " + previewLink);
            console.log("Album: " + albumName);
            console.log("-----------------------------")
                }
              }
        });
      }
      if(dataArr[3]==="concert-this"){
        axios.get("https://rest.bandsintown.com/artists/"+dataArr[4]+"/events?app_id=codingbootcamp")
        .then(function(response) {   
        var results = response.data
        if (results.length===0){
            console.log("Bummer, it doesn't look like " +dataArr[4]+ " has any upcoming shows! Try another search.")
        }else {      
        console.log("-----------------------------")
        console.log("LIRI THOUGHT YOU MIGHT LIKE THIS ARTIST:")
        console.log("Upcoming Shows For: " + dataArr[4]);
        for (var result of results){
        var eventDate =  moment(result.datetime).format("MMM Do YY");
        console.log("Venue: " + result.venue.name);
        console.log("Venue Location: "+ result.venue.city + ", " + result.venue.region);
        console.log("Event Date: "+ eventDate);
        console.log("-----------------------------")
            }   
        } 
    }).catch(function(error) {
        if (error.response) {    
            }
        });
    }
  if(dataArr[0]==="movie-this"){
     axios.get("http://www.omdbapi.com/?t=" +dataArr[1]+ "&y=&plot=short&apikey=trilogy")
  .then(
    function(response){
      console.log("-----------------------------")
      console.log("LIRI THOUGHT YOU MIGHT LIKE THIS MOVIE:")
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
   }
    }
  });
}