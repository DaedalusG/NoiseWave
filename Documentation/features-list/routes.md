# Routes

## Users
<!-- | /api/users          | GET   | Get a list of all users               | -->

| URL                 | Verb  | Description                           |
|---------------------|-------|---------------------------------------|
| /users          | POST  | Save the new user to DB               |
| /api/users/:id      | GET   | Get a user with likes and songs included               |
| /users/:id      | PATCH | Save changes to a user                |
| /users/:id/edit     | GET |   gets form to update user              |
| /users/:id      | DELETE| Remove a user form the database       |

## Songs

| URL                          | Verb            | Description   
|------------------------------|-----------------|--------------
| /upload                      | GET             | Gets upload song form ** instead restful would be /song/new 
| /songs                       | POST            | Post a song  
| /songs/:id/edit              | POST            | edit a song ** soundcloud has /you/tracks because a modal is in use
| /api/songs/:id               | PATCH           | Update a songs meta data           
| /api/songs/:id               | GET            | Shows a single song       
| /api/songs/:id               | DELETE          | Delete a song you've posted       
| /explore                     | GET             | Retrieve all songs on the database  ** restful would be /songs


## Comments

| URL                          | Verb            | Description   
|------------------------------|-----------------|--------------
| /comments                    | POST            | A user posts a comment on a song
| /comments/:id                | DELETE          | A user removes their comment from a song


## Likes

| URL                          | Verb            | Description   
|------------------------------|-----------------|--------------
| /likes                       | POST            | A user likes a song
| /likes/:id                   | DELETE          | A user unlikes a song

## Search 

| URL                          | Verb            | Description   
|------------------------------|-----------------|--------------
| /search?query=string     | POST            | Gets a list of all songs or users that match the query. The query will match the search string for instances of song(title, genre, album, artist) and user(username), that contain the search string (case insensitive).
| /:username                   | GET           | access api/users/:id
| /:username/:song                   | GET           | access api/songs/:id
