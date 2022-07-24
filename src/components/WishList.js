import React from "react";

function WishList () {
    return (
        <div className="wish-div">
            <h1>Wish List</h1>
            <h2>Here you can keep track of projects you got your eye on.
                Fill out our form and the project will be added to your list!
            </h2>
            <div className="list-div">
                <ul>
                    Project watch list
                    <li>Name price description</li>
                </ul>
            </div>
        </div>
    )
}

export default WishList