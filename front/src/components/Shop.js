import { useContext } from "react";

import Layout from "./Layout";
import useBeers from '../utils/useBeers';
import { BeerContext } from "../context/BeerContext";

const Shop = () => {

	useBeers();

	const [beers] = useContext(BeerContext);

	return (
		<>
			<Layout>
				<h2>Shop</h2>
				<ul>
					{beers.map(beer => (
						<li>
							<h3>{beer.name}</h3>
							<p>{beer.price}</p>
						</li>
					))}
				</ul>
			</Layout>
		</>
	)
}

export default Shop;
