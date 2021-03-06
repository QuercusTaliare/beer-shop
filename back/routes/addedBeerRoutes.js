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
    .then(() => res.status(200).send({ message: "success" }))
    .catch((err) => res.status(500).send(err))

})

router.put('/', (req, res) => {

  const beerId = { beer: req.body.beerId };
  const update = { $inc: { quantity: +1 } };
  const options = { upsert: true };

  AddedBeer.findOneAndUpdate(beerId, update, options, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  })

})

router.delete('/', (req, res) => {

  const beerId = { beer: req.body.beerId };

  AddedBeer.findOneAndRemove(beerId, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  })

})

module.exports = router;