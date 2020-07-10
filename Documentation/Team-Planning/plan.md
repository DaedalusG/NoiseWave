# Team Planning

- Packages
  - express
  - csurf
  - cookieParser
  - bodyParser
  - pug
  - sequelize/sequelize-cli/pg
  - jsonwebtoken
  - dotenv, dotenv-cli
  - express-validator
  - express-bearer-token
  - cors
  - per-env
  - bcryptjs
  - morgan (dev)
  - nodemon (dev)



-lay a foundation (backend skeleton)
    -.env (and .envexample)
    -.sequelizerc
    - Create database user: noisewave_app with password: ""
    - Edit config/index and config/database
    - Sequelize init and create:db
    - Implement models based off schema
    - gather seed data, learn about amazon s3 hosting with express 
      - Find around 50 songs from copyright free
    - Create an app.js file
    - Create a utils.js
    - Create bin folder with a www file in it
    - Create a routes folder with an index.js, songs.js, users.js;
    - Create an auth.js file
    -learn about css frameworks and start thinking about how best to emulate Soundcloud in pug files. 


-Client(frontend)
  -public directory
    -stylesheets
    -js sheets
  -views folder
  -index.js (for routing)
