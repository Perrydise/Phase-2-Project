import React from "react";
// import { NavLink } from "react-router-dom"

// const linkStyles = {
//     display: "inline-block",
//     width: "50px",
//     padding: "10px 5px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
//   };

function NavBar () {
    return ( <div className="navbar">
        {/* <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
            background: "darkblue",
        }}
        >
            Home
        </NavLink>
        <NavLink
        to="/Wishlist"
        exact
        style={linkStyles}
        activeStyle={{
            background: "darkblue",
        }}
        >
            Wish List
        </NavLink>
        <NavLink
        to="/PriceDisplayPage"
        exact
        style={linkStyles}
        activeStyle={{
            background: "darkblue"
        }}
        >
            Live Price display
        </NavLink> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Wishlist">Wish List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Pricedisplaypage">Price Display</a>
      </li>
    </ul>
  </div>
</nav>
    </div>

    )

}

export default NavBar