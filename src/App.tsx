import React from "react";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Basket } from "./pages/basket";
import { Checkout } from "./pages/checkout";
import { Success } from "./pages/success";
import { Products } from "./pages/products";
import { HomePage } from "./pages/home";
import { NoMatch } from "./pages/nomatch";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/basket">
          <Basket />
        </Route>
        <Route exact path="/checkout/success">
          <Success />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
