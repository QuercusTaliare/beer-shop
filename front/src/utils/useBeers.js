// Use API to fetch an array of all the beer products (with images)
// Save all the products into state
  // Should all of the products be in Context?
  // The fetch will only occur if the beers haven't been put into state yet
//

import { useEffect, useContext } from 'react';
import { BeerContext } from '../context/BeerContext';

const useBeers = () => {

  const url = 'https://sampleapis.com/beers/api/ale';

  const [beers, setBeers] = useContext(BeerContext)

  useEffect(() => {

    if (beers.length) {
      console.log("The beers are already in state")
      return
    }

    const fetchBeers = async () => {

      const res = await fetch(url, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json();

      setBeers(data);

    }

    fetchBeers();

  }, [])

}

export default useBeers;