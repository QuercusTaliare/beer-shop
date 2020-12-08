import { useContext } from "react";

import Layout from "./Layout";
import useBeers from '../utils/useBeers';
import { BeerContext } from "../context/BeerContext";

const Shop = () => {

	// Make API call and load inventory into context, if not already loaded
	useBeers();

	const [beers] = useContext(BeerContext);

	const oldAddToCart = async (beer) => {
		
		try {

			const res = await fetch('/cart/5fc26e8c97f4e77ed19cd77a', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					beerId: beer._id
				})
			})

		} catch (error) {

			console.log(error);
		
		}
		

	}

	const addToCart = async (beer) => {

		try {

			const res = await fetch('/addedBeer', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					beerId: beer._id
				})
			})

		} catch (err) {

			console.log(err);
			
		}

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
							<button 
								onClick={() => { addToCart(beer) }}
							>
								Add To Cart
							</button>
						</li>
					))}
				</ul>
			</Layout>
		</>
	)
}

export default Shop;
