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

router.put('/', (req, res) => {

  const beerId = { beer: req.body.beerId };
  const update = { $inc: { quantity: +1 } };
  const options = { upsert: true };

  AddedBeer.findOneAndUpdate(beerId, update, options, (err, result) => {
    if (err) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  })

})

module.exports = router;