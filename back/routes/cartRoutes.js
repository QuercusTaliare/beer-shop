const express = require('express');

const router = express.Router();

const Cart = require('../models/Cart');

// Get all carts
// GET request

router.get('/', (req, res) => {

  Cart
    .find()
    .populate('addedBeers')
    .then(carts => res.send(carts))

})


// Create a cart
// POST request

router.post('/', (req, res) => {

  const cart = new Cart()
  
  cart.save()
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500))

})

// Add item to cart
// PUT request

router.put('/:cartId', (req, res) => {

  Cart.findOneAndUpdate(
    // Query
    // Which cart (_id) do you want to update?
    { 
      _id: req.params.cartId 
    }, 
    // Update
    // push the beerId into the addedBeers array
    { 
      $push: { addedBeers: req.body.beerId },
    },
    // If it finds no document with the _id, then create one
    {
      upsert: true
    },
    // Callback
    // Can be used for handling errors and successes
    (err, newCart) => {
      if (err) {
        console.log('error occured')
      } else {
        console.log(newCart)
        res.status(200).send(newCart)
      }
    } 
  )

})

// Delete item from cart
// DELETE request
router.delete('/:cartId', (req, res) => {
  
  Cart.findByIdAndUpdate(
    // Cart id
    req.params.cartId,
    // Remove beer from cart
    {
      $pull: { addedBeers: req.body.beerId }
    },
    // Callback
    (err, newCart) => {
      if (err) {
        console.log(err)
      } else {
        console.log("successful deletion!")
        res.status(200).send(newCart)
      }
    }
     
  )
})

module.exports = router;