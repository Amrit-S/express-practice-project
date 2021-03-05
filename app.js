const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");

const app = express();

// output to terminal to give indication that backend has started
console.log("Express Backend has started on PORT " + config.app.port);
console.log(`Go to http://localhost:${config.app.port}/\n\n`);

//Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ methods: ["GET", "POST", "PUT", "DELETE"] }));

// routers
app.get("/", function (req, res) {
  res.status(200).json({ message: "Abandon All Hope Ye Who Enter Here..." });
});

// TO-DO: Redirect your urls to subroutes here 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.error("Error caught");
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;
