import React, { useEffect, useState } from "react";

function PriceDisplayPage() {
    const [coinDisplay, setCoinDisplay] = useState([])


    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((r) => r.json())
        .then((coinList) => setCoinDisplay(coinList))
        .catch((error) => console.log(error))
    }, [])

    const apiDisplay = coinDisplay.map((element, index) => {
        const id = index
        const name = element.name
        const image = element.image
        const price = element.current_price
        return (
        // <div className="coin-display">
        //     <h1>{name}</h1>
        //     <h2>{price}</h2>
        //     <img src={image} alt={name} width="80" height="80"></img>
        //     </div>
       
            <div className="column">
        <div className="card" key={id}>
  <img src={image} class="card-img-top" alt={name}></img>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price}</p>
  </div>
</div>
</div>
        )
    })


    return (
        <div className="display-page">
    <h1 className="display-page-header">Welcome to our live price display page!</h1>
    <h2 className="display-second-header">The coins below will have all a beginner needs to know when it comes to price, name, and the sybmol their represented by. Enjoy!</h2>
    <div className="row">
    {apiDisplay}
    </div>
    </div>

    )
    
}

export default PriceDisplayPage