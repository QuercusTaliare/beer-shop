import { useEffect, useState } from "react";
import Layout from "./Layout";

const Cart = () => {

  const [cart, setCart] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    if(isDeleting) {
      return
    }

    const fetchCart = async () => {

      const res = await fetch('/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json();

      if (data.length) {
        setCart(data[0].addedBeers);
      }

    }

    fetchCart();

  }, [isDeleting])

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
        {cart.map(beer => (
          <li key={`${beer._id}`}>
            <h3>{beer.name}</h3>
            <p>{beer.price}</p>
            <button type="button" onClick={() => { deleteBeer(beer) }}>X</button>
          </li>  
        ))}
      </ul>
    </Layout>
  )
}

export default Cart;