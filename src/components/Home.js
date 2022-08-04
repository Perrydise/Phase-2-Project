import React from "react";

function Home () {
    return (
        <div className="header-div">
            <h1 className="home-header">Welcome to the starting place for all Crypto Newbies!</h1>
            <div>
            <p className="home-p">
                This site will give you all the basics of crypto you need to get started.
            </p>
            </div>
            <ul className="home-list">What you can expect on this site:
            <li>The names of the top 100 projects in the market right now</li>
            <li>The ability to make a wishlist for coins you you want to invest in</li>
            <li>A live look at coins on the market and their prices</li>
            </ul>
        </div>
    )
}

export default Home