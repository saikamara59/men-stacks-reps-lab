const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const tvShowController = require("./controllers/showscntl");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
// const imageController = require("./controllers/images")

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
const tvShow = require("./models/tvshows");
// const Shows = require("./models/tvshows");


// configure view engine
app.set("view engine","ejs")


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
app.use(morgan("dev")); //new

app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res) => {
    res.render("home");
  });

// new show route
  app.get("/shows/new",tvShowController.getNewShowForm);

  app.get("/shows",tvShowController.getAllShows);

  app.get("/shows/:id",tvShowController.getOneShow);

  app.get("/shows/:showId/edit", tvShowController.editShowForm);
// app.post - POST 
  app.post("/shows",tvShowController.createAShow);

  app.post("/shows/:showId/images", async (req, res) => {
    console.log("req.body", req.body);
    console.log("req.params", req.params);
    try {
        const foundAShow = await Shows.findById(req.params.showId);
        if (req.body.uploadedBy === "") {
            delete req.body.uploadedBy;
            console.log("after parsing", req.body);
        }
        foundAShow.images.push(req.body);
        await foundAShow.save();

        res.redirect(`/shows/${req.params.showId}`);
    } catch (err) {
        console.log(err);
        res.redirect(`/shows/${req.params.showId}`);
    }
});


  app.delete("/shows/:id",tvShowController.deleteAShow);
// 
app.put("/shows/:id",tvShowController.editShow);
  
// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  

  app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
  })