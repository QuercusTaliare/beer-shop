import { useContext } from "react";
import styled from 'styled-components';

import Layout from "./Layout";
import useBeers from '../utils/useBeers';
import { BeerContext } from "../context/BeerContext";

export const BeerListStyles = styled.ul`
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	
	`;

export const BeerStyles = styled.li`
		list-style-type: none;
		flex: 0 1 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		text-align: center;
		height: 50vh;
		border: solid 1px var(--secondary);
		margin: 1.4rem;
		border-radius: 4px;
		box-shadow: 2px 2px 0 var(--secondary); 
		img {
			height: 200px;
			width: 100%;
			object-fit: contain;
			display: block;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	
	`;

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
