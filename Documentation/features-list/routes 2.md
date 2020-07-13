# Backend Routes

## Users

| URL                 | Verb  | Description                           |
|---------------------|-------|---------------------------------------|
| /api/users          | GET   | Get a list of all users               |
| /api/users          | POST  | Save the new user to DB               |
| /api/users/:id      | GET   | Show a page for a user                |
| /api/users/:id      | PATCH | Save changes to a user                |
| /api/users/:id      | DELETE| Remove a user form the database       |

## Likes API

| URL                                   | Verb  | Description                           |
|---------------------------------------|-------|---------------------------------------|
| /api/songs/:songId/likes/:userId      | POST  | Adds a like to the song               |
| /api/songs/:songId/likes/:userId      | DELETE| Remove a like from a song             |
| /api/songs/:id/likes                  | GET   | Fetches the likes for a song          |
| /api/users/:id/likes                  | GET   | Fetches the likes a user has made     |                                    

## Comments API

| URL                                  | Verb     | Description                 |
|--------------------------------------|----------|-----------------------------|
| /api/songs/:id/comments              | GET      | Returns relevant comments   |
| /api/songs/:id/comments              | POST     | Creates a comment           |
| /api/comments/:id                    | GET      | Returns a comment           |
| /api/comments/:id                    | PATCH    | Edits a comment             |
| /api/comments/:id                    | DELETE   | Removes a comment           |

## Songs API

| URL                          | Verb            | Description   
|------------------------------|-----------------|--------------
| /api/songs/:id               | GET             | Get a specific song
| /api/users/:id/songs         | POST            | Post a song   
| /api/songs/:id               | PATCH           | Update a songs meta data           
| /api/songs/:id               | DELETE          | Delete a song you've posted       
| /api/users/:id/songs/        | GET             | Retrieve all songs uploaded by a user              
| /api/songs                   | GET             | Retrieve all songs on the database     

## Search API

| URL                          | Verb            | Description   
|------------------------------|-----------------|--------------
| /api/search?query=string     | POST            | 
| /api/search                  | POST            | Gets a list of all songs or users that match the query

- get 1 song
- get all songs by user
- get all songs?????
- get songs that match query??
 
- get users that match query??
