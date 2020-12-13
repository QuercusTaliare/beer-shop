const mongoose = require('mongoose');
const fetch = require('isomorphic-fetch');
// const Cart = require('../models/Cart');
const Beer = require('../models/Beer');

// Allow variables with .env to be read
require('dotenv').config();

const uri = process.env.REACT_APP_DATABASE;

// Connect to Database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to ${uri}`);
  })
  .catch(err => {
    console.log(err.message);
  })

// Fetch Beer Inventory
const apiUrl = 'https://sampleapis.com/beers/api/ale';

const fetchBeers = async () => {

  try {

    const res = await fetch(apiUrl);
    const data = await res.json();
    
    return data;

  } catch(err) {

    console.log('Fetch Failed', err);

  }

}

// Place Inventory Into Database
// https://yashints.dev/blog/2019/08/17/js-async-await
(async () => {
  
  // Resolve Promise 
  const beers = await fetchBeers();

  // Empty out the beers collection
  // Create a new Beer document for each product
  Beer.remove().then(() => {
    beers.forEach(beerData => {
      const beer = new Beer({
        name: beerData.name,
        price: beerData.price,
        image: beerData.image
      });
      beer.save().then(() => console.log(`Saved ${beer.name}`));
    })
  })

})()


