const mysql = require("mysql");
const express = require("express");
// const orm = require("./config/orm.js");
const PORT = process.env.PORT || 8080;

const app = express();

// serve static cotent for the app from the public dir
app.use(express.static("public"));

// parse app body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give server access
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server so it can begin listening to client requests
app.listen(PORT, () => {
  // log server side when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
