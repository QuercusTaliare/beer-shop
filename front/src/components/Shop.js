import { useContext } from "react";

import Layout from "./Layout";
import useBeers from '../utils/useBeers';
import { BeerContext } from "../context/BeerContext";

const Shop = () => {

	// Make API call and load inventory into context, if not already loaded
	useBeers();

	const [beers] = useContext(BeerContext);

	const addToCart = (beer) => {
		
		// TODO: POST request to add a beer to the cart
		// fetch(`${process.env.REACT_APP_API_URL}/cart`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({

		// 	})
		// })

	}

	return (
		<>
			<Layout>
				<h2>Shop</h2>
				<ul>
					{beers.map(beer => (
						<li key={beer._id}>
							<h3>{beer.name}</h3>
							<p>{beer.price}</p>
							<button onClick={() => { addToCart(beer) }}>Add To Cart</button>
						</li>
					))}
				</ul>
			</Layout>
		</>
	)
}

export default Shop;
