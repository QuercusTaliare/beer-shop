import { useEffect, useState } from "react";
import Layout from "./Layout";
import { BeerListStyles, BeerStyles } from './Shop';

const Cart = () => {

  const [cart, setCart] = useState([]);
  const [addedBeers, setAddedBeers] = useState([])
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const fetchAddedBeers = async () => {

      const res = await fetch('/addedBeer', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json();

      if (data.length) {
        setAddedBeers(data);
      }
      
    }

    fetchAddedBeers();

  }, [])





  const deleteBeer = async (beer) => {

    // Make DELETE request to the server

    setIsDeleting(true);

    try { 

      const res = await fetch('/addedBeer', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          beerId: beer._id
        })
      })

    } catch (err) {
      console.log(err)
    }

    setIsDeleting(false);

  }

  return (
    <Layout>
      <h2>Cart</h2>

      <BeerListStyles>
        {addedBeers.map(addedBeer => (
          <BeerStyles key={addedBeer.beer._id}>
            <h3>{addedBeer.beer.name}</h3>
            <img src={addedBeer.beer.image} alt={addedBeer.beer.name} />
            <p>{addedBeer.beer.price}</p>
            <p>Quantity: {addedBeer.quantity}</p>
            <button 
              className="button"
              onClick={() => { deleteBeer(addedBeer) }}
            >
              Delete
            </button>
          </BeerStyles>
        ))}
      </BeerListStyles>
    </Layout>
  )
}

export default Cart;