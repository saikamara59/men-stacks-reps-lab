const express = require ("express");

const dotenv = require("dotenv");

const mongoose = require ("mongoose");
const tvShowController = require("./controllers/showscntl")
const methodOverride = require("method-override");

const morgan = require("morgan");

const path = require("path");
// APP = configs
dotenv.config();


const app = express();

const PORT = process.env.PORT || 4000


mongoose.connect(process.env.MONGODB_URI);

// mongoose connection event listener
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

  mongoose.connection.on("error", (err) => {
    console.log(err);
  });


  // IMPORT mongoose models
const shows = require("./models/tvshows");


// configure view engine
app.set("view engine","ejs")


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
app.use(morgan("dev")); //new

app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res) => {
    res.render("index");
  });


  app.get("/shows/new", )
  