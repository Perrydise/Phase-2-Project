import React, { useEffect, useState } from "react";

function PriceDisplayPage() {
    const [coinDisplay, setCoinDisplay] = useState([])


    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((r) => r.json())
        .then((coinList) => setCoinDisplay(coinList))
        .catch((error) => console.log(error))
    }, [])

    const apiDisplay = coinDisplay.map((element) => {
        const name = element.name
        const image = element.image
        const price = element.current_price
        return (<div className="coin-display">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <img src={image} alt={name} width="200" height="200"></img>
            </div>
        )
    })


    return (
        <div className="display-page">
    <h1 className="display-page-header">Welcome to our live price display page!</h1>
    <p>{apiDisplay}</p>
    </div>

    )
    
}

export default PriceDisplayPage