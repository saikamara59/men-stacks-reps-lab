const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    uploadedBy: { type: String, required: true, default: "Guest" },
});

const tvSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isAShow: { type: Boolean, required: true },
    images: [imageSchema],
});

const tvShow = mongoose.model("tvShow", tvSchema);

// export the model object 
module.exports = tvShow;
