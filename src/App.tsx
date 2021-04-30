import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {Basket} from './pages/basket';
import {Checkout} from  './pages/checkout';
import {Success} from  './pages/success';
import {Products} from  './pages/products';
import {HomePage} from  './pages/home';

const App:any = () => {
  return (
    <Router>
      <Route path = "/basket">
       <Basket />
      </Route>
      <Route path = "/checkout">
        <Checkout />
      </Route>
      <Route path = "/checkout/success" >
        <Success />
      </Route>
      <Route path = "/products">
        <Products />
      </Route>
      <Route path = "/" exact>
        <HomePage />
      </Route>
    </Router>
    );
}

export default App;
