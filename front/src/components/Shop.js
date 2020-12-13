import { useContext } from "react";
import styled from 'styled-components';

import Layout from "./Layout";
import useBeers from '../utils/useBeers';
import { BeerContext } from "../context/BeerContext";

import { BeerListStyles, BeerStyles } from '../styles/BeersStyles';

const Shop = () => {

	// Make API call and load inventory into context, if not already loaded
	useBeers();

	const [beers] = useContext(BeerContext);

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
				<BeerListStyles>
					{beers.map(beer => (
						<BeerStyles key={beer._id}>
							<h3>{beer.name}</h3>
							<img src={beer.image} alt={beer.name}/>
							<p>{beer.price}</p>

							<button 
								className="button"
								onClick={() => { addToCart(beer) }}
							>
								Add To Cart
							</button>
						</BeerStyles>
					))}
				</BeerListStyles>
			</Layout>
		</>
	)
}

export default Shop;
