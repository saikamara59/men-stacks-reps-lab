const shows = require("./models/tvshows");


const getAllShows = async (req, res) => {
    try {
      const allShows = await shows.find();
      res.render("tvshows/index", { shows: allShows, message: "Hello Friend" });
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }}

    const getOneShow = async (req, res) => {
        try {
          const foundAShow = await Fruit.findById(req.params.id);
          
          const contextShow = { shows: foundAShow };
          res.render("tvshows/index", contextData);
        } catch (err) {
          console.log(err);
          res.redirect("/");
        }
      }


      const getNewShow = (req, res) => {
        res.render("tvshows/new")}
      const createAShow = async (req, res) => {
        if (req.body.isAActor) {
          req.body.isAActor = true;
        } else {
          req.body.isAActor = false;
        }
      
        try {
          await shows.create(req.body);
          res.redirect("/tvshows");
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
      }




      module.exports = {
        getAllShows,
        getOneShow,
        createAShow,
        
      }