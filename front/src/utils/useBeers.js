import { useEffect, useContext } from 'react';

import { BeerContext } from '../context/BeerContext';

const useBeers = () => {

  const url = process.env.REACT_APP_API_URL;

  const [beers, setBeers] = useContext(BeerContext)

  useEffect(() => {

    if (beers.length) {
      console.log("The beers are already in state")
      return
    }

    const fetchBeers = async () => {

      const res = await fetch(`/beer`, {
        method: 'Get',
        headers: {
          'Accept': 'application/json',
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