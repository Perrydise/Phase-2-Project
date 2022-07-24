import Home from './Home';
import NavBar from './NavBar';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import WishList from './WishList';



function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route path="/">
      <Home />
      </Route>
      <Route exact path="/wishlist">
        <WishList />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
