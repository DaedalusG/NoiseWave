# NoiseWave
A SoundCloud-inspired application

- [noiseWave](#noisewave)
  - [Feature List](#feature-list)
    - [Songs](#songs)
    - [Users](#users)
      - [Authentication](#authentication)
      - [Authorization](#authorization)
    - [Comments](#comments)
    - [Hosting](#hosting)
    - [Documentation](#documentation)
  - [Bonus Features](#bonus-features)
    - [Likes](#likes)
    - [Playlists](#playlists)
    - [Search Bar](#search-bar)
    - [Waveform Visualization Comments](#waveform-visualization-comments)
    - [Albums](#albums)

---

## Feature List

### Songs

|           | API                                           | Front-End
|-----------|-----------------------------------------------|----------------------------------------------------------
| CREATE    | Create an instance of a song on the database  | A form that a user can use to upload a song
| READ      | Select song(s) from the database              | Rendering a list of songs on a user's page, searching for songs
| UPDATE    | Change an existing song's title               | A form for editing an existing song's title
| DELETE    | Remove a song from the database               | A button that a user can click to delete their own song

- A user should be able to play songs in noiseWase's library, by clicking on thumbnail elements associated with songs.
- Each song has its own page where it can be played and commented on.
  - The music player on a song page will use a waveform visualization of the song as the song's progress bar.
  - A song page will display comments on the song from users, along with an input field to post new comments.
- When a user navigates away from a song's page, the song will continue to play in a smaller player at the bottom of the page.
- A user should have the ability to upload songs to the websites database, as well as edit information about songs after upload.
- The songs should be hosted through Amazon S3 hosting services.

### Users

|           | API                                           | Front-End
|-----------|-----------------------------------------------|---------------------------------------------
| CREATE    | Create an instance of a user on the database  | A form that a user can use to create an account
| READ      | Select users(s) from the database             | Rendering a user's profile data
| UPDATE    | Change profile pic, email, age, password      | A form for editing a user's account details
| DELETE    | Delete a user from the database               | A button that deletes a user's account

- If the user has not signed up for a noiseWave profile, the splash page should display a prompt asking for the user to sign in or create an account.
- A user should be able to create a profile capturing information about themselves including an image of the user, a username, a name, their birthdate, and their email. Once created a user should be able to log on to noiseWave via their username.
- When logged in: 
  - The user should be able to like songs.
  - The user should have access to a display of all their liked songs, as well as a display of their listening history.
  - The user should be able to comment on songs. Comments should be displayed with a thumbnail picture of the user and the comment  listed chronologically beneath the song's main progress bar and display field. 
  - The user should have the ability to upload songs from their computer to the noiseWave library. Once a song is uploaded the user should have the ability to edit meta information about the song, and remove the song from the noiseWave library.
  - A user should be able to logout of noiseWave

### Comments

|           | API                                                         | Front-End
|-----------|-------------------------------------------------------------|----------------------------------------------------------
| CREATE    | Create an instance of a comment on the database             | A form input field for users to comment on songs
| READ      | Eager load comments for selected song for a song            | Rendering a list of comments on a songs page
| DELETE    | Remove a comment from the database                          | A button that a user can click to delete their own comment

- Users should be able to leave comments on a song.
- All comments should be able to be seen on a song's page. Comments should be laid out chronologically on the song's page, from newest to oldest.

### Likes

|           | API                                                         | Front-End
|-----------|-------------------------------------------------------------|----------------------------------------------------------
| CREATE    | Create an instance of a like on the database                | A like button next to the song's title or album
| READ      | Eager loading of likes on a songs or user's page            | Rendering a list of likes on a users page, counting likes on a songs page.
| DELETE    | Remove a like from the database                             | A button that a user can click to delete their own comment

- Users should be able to leave likes on a song.
- A song's likes should be visible on its page.

#### Authentication

- User authentication will be handled using Javascript Web Tokens through the Express framework. Logging in allows users access full site functionality including creating, updating, and deleting content.
- Without authentication, users should still be able to browse content and listen to any music in the application.

#### Authorization

- A user should only be able to edit or delete their own songs/comments/likes/profile


### Hosting

- The web app will be hosted on Heroku so that it will be accessible via URL
- Heroku will also host the database so there can be persistence of data across sessions

### Documentation

- Noise Wave's git repo will contain a README.md and other documentation that outlines the app's features nad technology

## Bonus Features


### Playlists

- This feature allows users to create named playlists, add songs to their playlists, and play their playlists.

### Search Bar

- This feature allows users to search for songs and users.

### Waveform Visualization Comments

- This feature allows users to make comments that correspond with points of the waveform.

### Albums

- This feature would allow songs to be part of album collections.

### Editing Display For Uploads

- This feature provides a content management area in which a user has access to a display of all their updated content, and may select multiple items at once, for removal, association, or editing.
