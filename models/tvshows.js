const mongoose = require("mongoose")


const imageSchema = new mongoose.Schema({
    imageUrl: {type: String, required: true},
    uploadedBy: { type: String , required: "Guest"},
})

const tvSchema = new mongoose.Schema({
    name: {type: String , required:true},
    isAShow:{type : String , required: true},
    images:[imageSchema],
});

const Shows = mongoose.model("tvshows",tvSchema)

// export the model object 
module.exports = Shows