import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import Shop from './Shop';
import Cart from './Cart';
import FourOhFour from './FourOhFour';


const Router = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route component={FourOhFour} />
      </Switch>
  </BrowserRouter>
  )
}

export default Router;