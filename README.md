# LIRI

This LIRI bot allows you to quickly search a variety of entertainment databases to find something to quickly listen to (Spotify API), Movie to watch (oMDB API) or upcoming concerts to attend (Bands in Town API)

Bored and looking for something to do but don't where to search, or worse don't want to search in multiple places to find options. This LIRI bot is here to help.

Structured to function as a single terminal file to search via node you can search song titles, upcoming concerts or movies by using simple commands.


To run this program on your terminal follow the below steps:

    1a. Create your own Spotify access key via the API. By going to:
        Do this by:
            Step One: Visit https://developer.spotify.com/my-applications/#!/
            Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
            Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
            Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.
        Once you have your keys:
            Set up your own .env file within the root of the project folder updated with your own API kets
            # Spotify API keys

            SPOTIFY_ID=your_APP_ID_here
            SPOTIFY_SECRET=your_API_secret_here

    1b. Obtain API keys for Bands in Town and oMDB for axios calls.
        BandsInTown Email support@bandsintown.com for an API key
        oMDB API key can be obtained by going to http://www.omdbapi.com/

    2. Run npm install to install all dependcies associated with this app.

    3. To search use the following commands*:
        concert-this YOUR ARTIST/BAND SEARCH 
        spotify-this-song YOUR SONG TITLE SEARCH
        movie-this YOUR MOVIE SEARCH
        do-what-it-says SURPRISE
        
        Video and Gif demos for all searches available in demo folder.
        
       
This LIRI bot utilizies: JQuery, Moment, Noda and APIs from Spotify, Bands in Town and oMDB 
Link: https://avpaige.github.io/LIRI/ 
I developed this application as part of the UCLA Web Developement Extension course work.



