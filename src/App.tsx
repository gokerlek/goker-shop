import React from 'react';
import "tailwindcss/tailwind.css"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {Basket} from './pages/basket';
import {Checkout} from  './pages/checkout';
import {Success} from  './pages/success';
import {Products} from  './pages/products';
import {HomePage} from  './pages/home';
import {NoMatch} from  './pages/nomatch';


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
      <Route path="*">
            <NoMatch />
      </Route>
    </Router>
    );
}

export default App;
