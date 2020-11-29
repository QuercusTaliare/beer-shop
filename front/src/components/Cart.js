import { useEffect, useState } from "react";
import Layout from "./Layout";

const Cart = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const fetchCart = async () => {

      const res = await fetch('/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json();

      setCart(data[0].addedBeers);

    }

    fetchCart();

  }, [])

  const deleteBeer = () => {

    // Make DELETE request to the server

  }

  return (
    <Layout>
      <h2>Cart</h2>
      <ul>
        {cart.map(beer => (
          <li key={`${beer._id}`}>
            <h3>{beer.name}</h3>
            <p>{beer.price}</p>
            <button type="button" onClick={deleteBeer}>X</button>
          </li>  
        ))}
      </ul>
    </Layout>
  )
}

export default Cart;