const mongoose = require('mongoose');
const { Schema } = mongoose;
const Beer = require('../models/Beer');

const cartSchema = new Schema({
  // user: String,
  addedBeers: [{
    type: Schema.Types.ObjectId,
    ref: 'Beer'
  }]
})

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;