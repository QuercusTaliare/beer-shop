const mongoose = require('mongoose');
const { Schema } = mongoose;

const beerSchema = new Schema({
  name: String,
  price: String,
  image: String
})

module.exports = mongoose.model("Beer", beerSchema);