const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  user: String,
  beers: [String]
})

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;