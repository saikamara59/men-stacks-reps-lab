const mongoose = require("mongoose")


const imageSchema = new mongoose.Schema({
    imageUrl: {type: String, required: true},
    uploadedBy: { type: String , required: "Guest"},
})

const tvSchema = new mongoose.Schema({
    name: {type: String , required:true},
    isAActor:{type : String , required: true},
    images:[imageSchema],
});

const Shows = mongoose.model("tvshows",tvSchema)


module.exports = Shows