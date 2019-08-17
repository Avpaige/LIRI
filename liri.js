require("dotenv").config();
var keys = require("./keys.js").spotify;
var fs = require("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require('moment');
var search = process.argv[3];
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

    var artistName = data.tracks.items[0].artists[0].name;
    var songName = data.tracks.items[0].name;
    var previewLink = data.tracks.items[0].preview_url;
    var albumName = data.tracks.items[0].album.name

    console.log("Artist: " + artistName);
    console.log("Song Name: " + songName);
    console.log("Preview Link: " + previewLink);
    console.log("Album: " + albumName);
    

      }
    });
  }

    
      // Artist(s)
      // The song's name
      // A preview link of the song from Spotify
      // The album that the song is from

  // for (var i=0; i<data.length; i++){
  //     console.log(data.tracks.items[i])
  //     console.log(data.tracks.items[i].name)
  //     console.log(data.tracks.items[i].album.name)
  //     // var songName = data.tracks.items[song].name;
      // var albumName = data.tracks.items[song].album.name;
      // var artistName = data.tracks.items[song].album.artists[i].name;
      // var url = data.tracks.items[song].album.external_urls.spotify;
      // console.log ("RESULT" + songName, albumName, artistName, url)


// if (input==="spotify-this-song"){ 
//      spotify.search({type:"track",query: search},
//     function (error, data){
//     if (error) { 
//         console.log("You had an error" + error) 
//         console.log("Hmmm we don't know that one, can you hum it?")
//     }else{
//       var songs= data  
//       console.log("RESULTS" + songs)
//       // console.log(Object.keys.songs)
//       // console.log(songs.tracks.items[0])
//       // console.log("Search results" + songs)
//       // var songName = songs.tracks.items[0].name;
//       // var albumName = songs.tracks.items[0].album.name;
//       // var artistName = songs.tracks.items[0].album.artists[0].name;
//       // var url = songs.tracks.items[0].album.external_urls.spotify;
//       // console.log ("RESULT" + songName, albumName, artistName, url)
//       }
//     });
//   }