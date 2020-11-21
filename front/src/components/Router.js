import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import Shop from './Shop';
import Cart from './Cart';
import FourOhFour from './FourOhFour';
import { BeerContextProvider } from '../context/BeerContext';

const Router = () => {
  
  return (
    <BrowserRouter>

      <BeerContextProvider>

        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route component={FourOhFour} />
        </Switch>

      </BeerContextProvider>

  </BrowserRouter>
  )
}

export default Router;