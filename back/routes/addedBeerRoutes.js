const express = require('express');

const router = express.Router();

const AddedBeer = require('../models/AddedBeer');

router.get('/', (req, res) => {

  AddedBeer
    .find()
    .populate('beer')
    .then(addedBeers => res.send(addedBeers))

})

router.post('/', (req, res) => {

  const addedBeer = new AddedBeer({
    beer: req.body.beerId,
    quantity: 1
  })

  addedBeer
    .save()
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500))

})

module.exports = router;