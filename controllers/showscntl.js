const shows = require("../models/tvshows");


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


      const getNewShowForm = (req, res) => {
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

      const deleteAShow = async (req,res) => {
        try{
            await shows.findByIdAndDelete(req.params.id);
            res.redirect("/tvshows");
        } catch (err) {
            console.log(err);
            res.redirect(`/`);
         }
        }
      
            const editShowForm = async (req,res) => {
                try {
                    const showsToEdit = await shows.findById(req.params.showId);
                    res.render("shows/edit",{ shows:showsToEdit});
                } catch (err) {
                        console.log(err);
                            res.redirect(`/`);
                        }
                    }
                
                    const editShow = async (req,res) => {
                        try {
                            if (req.body.isAActor === "on") {
                                req.body.isAActor = true;
                            } else {
                                req.body.isAActor = false
                            }
                        
                        await shows.findByIdAndUpdate(req.params.id, req.body, {new: true});

                            res.redirect(`/shows/${req.params.id}`);
                        } catch(err){
                            console.log(err);
                            res.redirect(`/shows/${req.params.id}`);
                        }
                        
                    }
                    
            




      module.exports = {
        getAllShows,
        getOneShow,
        createAShow,
        deleteAShow,
        editShowForm,
        editShow,
        getNewShowForm
      }