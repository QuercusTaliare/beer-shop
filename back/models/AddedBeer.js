const mongoose = require('mongoose');
const { Schema } = mongoose;
const Beer = require('../models/Beer');

const addedBeerSchema = new Schema({
  beer: {
    type: Schema.Types.ObjectId,
    ref: 'Beer'
  },
  quantity: Number
})

const AddedBeer = mongoose.model('addedBeer', addedBeerSchema);
module.exports = AddedBeer;

