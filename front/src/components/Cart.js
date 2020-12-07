import { useEffect, useState } from "react";
import Layout from "./Layout";

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

      console.log(addedBeers);

    }

    fetchAddedBeers();

  }, [])





  const deleteBeer = async (beer) => {

    // Make DELETE request to the server

    setIsDeleting(true);

    try { 

      const res = await fetch('/cart/5fc26e8c97f4e77ed19cd77a', {
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

      <ul>
        {addedBeers.map(addedBeer => (
          <li key={addedBeer.beer._id}>
            <h3>{addedBeer.beer.name}</h3>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Cart;