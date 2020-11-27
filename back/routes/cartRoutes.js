const express = require('express');

const router = express.Router();

const Cart = require('../models/Cart');

router.get('/', (req, res) => {

  Cart.find().then(carts => res.send(carts));

})


// Add item to cart
// POST request

// router.post('/:userId', (req, res) => {
//   Cart.findByIdAndUpdate({userId}, )
// })

// Delete item from cart
// DELETE request

module.exports = router;