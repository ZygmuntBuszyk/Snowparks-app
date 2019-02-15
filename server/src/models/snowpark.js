const mongoose = require('mongoose');

const snowparksSchema = new mongoose.Schema({
    name: String,
    mountain: String,
    country: String,
    city: String,
    description: String,
    website: String,
    image: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const Snowpark = mongoose.model('Snowpark', snowparksSchema);
module.exports = Snowpark;