const express = require('express');
const beerRoutes = require('./routes/beerRoutes');
const addedBeerRoutes = require('./routes/addedBeerRoutes');

const app = express();

// Bring in the Mongoose
const mongoose = require('mongoose');

// Allow variables with .env to be read
require('dotenv').config();

const uri = process.env.REACT_APP_DATABASE;

// Connect to the database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to ${uri}`);
  })
  .catch(err => {
    console.log(err.message);
  })

// Body Parser Middleware
app.use(express.json({ extended: false }));

app.use('/beer', beerRoutes);
app.use('/addedBeer', addedBeerRoutes);

app.listen(4000, () => {
  console.log('The server is running at port 4000');
})