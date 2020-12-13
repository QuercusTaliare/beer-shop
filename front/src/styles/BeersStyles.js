import styled from 'styled-components';

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