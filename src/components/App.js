import Home from './Home';
import NavBar from './NavBar';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import WishList from './WishList';
import PriceDisplayPage from './PriceDisplayPage';



function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/wishlist">
        <WishList />
      </Route>
      <Route exact path="/pricedisplaypage">
        <PriceDisplayPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
