const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Find me at localhost:8080`);
});

//testin auth routes
const authRouter = require("./auth-routes");
app.use(authRouter);
module.exports = app;
