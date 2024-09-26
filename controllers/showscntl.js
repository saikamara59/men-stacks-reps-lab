
const tvShow = require("../models/tvshows");

const getAllShows = async (req, res) => {
  try {
    const allShows = await tvShow.find();
    res.render("shows/index", { shows: allShows, message: "Hello World" });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const getOneShow = async (req, res) => {
  try {
    const foundAShow = await tvShow.findById(req.params.id);
    const contextShow = { shows: foundAShow };
    res.render("shows/index", contextShow);
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const getNewShowForm = (req, res) => {
  res.render("shows/new");
};

const createAShow = async (req, res) => {
  req.body.isAShow = req.body.isAShow === "on";
  try {
    await tvShow.create(req.body);
    res.redirect("/shows");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteAShow = async (req, res) => {
  try {
    await tvShow.findByIdAndDelete(req.params.id);
    res.redirect("/shows");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const editShowForm = async (req, res) => {
  try {
    const showsToEdit = await tvShow.findById(req.params.showId);
    res.render("shows/edit", { shows: showsToEdit });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const editShow = async (req, res) => {
  req.body.isAShow = req.body.isAShow === "on";
  try {
    await tvShow.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/shows/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/shows/${req.params.id}`);
  }
};

module.exports = {
  getAllShows,
  getOneShow,
  createAShow,
  deleteAShow,
  editShowForm,
  editShow,
  getNewShowForm,
};
