
## Static Elements

- Present on every page except sign-up and login
- A header with
  - Logo 
  - Navbar
    - Link to explore
    - Search bar
    - Link to song upload form
    - Link to profile page with username
      - Maybe dropdown menu with links to liked songs and uploads
    - "..." icon that links to information about the project, like the github repo and an about page
    
  - The "footer" would be the music player, which is only visible if a track is playing
    - previous track, play/pause, next track
    - shuffle, repeat 
    - basic progress bar 
    - volume level
    - song/artist names and image
    - like button
    - Playlist popout button (when playlists are implmenting)

## Front end routes

| URL                   | Renders                   
|-----------------------|-----------------------------------
|/noisewave/login       | Login form with a link to sign-up and explore, redirected from noisewave/ if there is no logged in user
|/noiseWave/sign-up     | Sign up form with a link to login
|/noiseWave/explore     | Page that renders all of the songs, redirected from noisewave if a user is logged in
|/noiseWave/:user       | Diplays preview list of liked songs, and preview list of uploaded songs
|/noisewave/:user/likes | Displays users liked songs
|/noisewave/:user/uploads| Displays users uploaded songs 
|/noisewave/:user/upload | Form to upload Songs
|/noisewave/:user/:song/edit  | Form to edit uploaded Songs
|/noiseWave/:user/:song  | Displays specific song (displays edit button if you are THAT USER)
|/noiseWave/:user/edit   | A form that allows the user to edit personal information
|/noiseWave/search/:query| Displays search results for a query






