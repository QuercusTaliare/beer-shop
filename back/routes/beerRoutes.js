const express = require('express');

const router = express.Router();

const Beer = require('../models/Beer');

router.get('/', (req, res) => {

  Beer.find().then(beers => res.send(beers))

})

module.exports = router;