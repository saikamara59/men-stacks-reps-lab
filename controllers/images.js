// const tvShows = require("../models/tvshows");

// // ... other controller functions
// async function imageCreate(req, res, next) {
//   try {
//     // Find the specific show by ID
//     const show = await tvShows.findById(req.params.id);

//     if (!show) {
//       return res.status(404).send("Show not found");
//     }

//     if (req.body.uploadedBy === "") {
//       delete req.body.uploadedBy;
//     }

//     // Add the new image to the show's images array
//     show.images.push(req.body);

//     // Save the updated show document
//     await show.save();

//     // Redirect to the show's detail page
//     res.redirect(`/shows/${show._id}`);
//   } catch (err) {
//     console.log(err);
//     res.redirect(`/shows/${req.params.id}`);
//   }
// }

// module.exports = {
//   imageCreate,
// };

