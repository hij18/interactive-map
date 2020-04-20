const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const Coord = new Schema({
    x: String,
    y: String,
});

module.exports = mongoose.model('Coord', Coord);
