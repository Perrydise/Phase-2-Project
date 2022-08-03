import React, { useEffect, useState } from "react";
import CryptoForm from "./CryptoForm";
import CryptoItem from "./CryptoItem";

function WishList() {
    const [coins, setCoins] = useState([])
    

    useEffect(() => {
        fetch("http://localhost:3000/coins")
        .then((r) => r.json())
        .then((coins) => setCoins(coins))
        .catch((error) => console.log(error))
 }, [])

    function handleDeleteQuestion(deletedQuestionId) {
        const updatedCryptoList = coins.filter((coin) => {
            console.log(deletedQuestionId, coin, coin.id)
            return deletedQuestionId != coin.id
        })
        setCoins(updatedCryptoList)
    }

 const cryptoList = coins.map((element, index) => {
    const name = element.name
    const id = element.id
    const description = element.description
    return <CryptoItem name={name} description={description} key={index} id={id} onDelete={handleDeleteQuestion}/> })
    

    function handleSubmit(newItem) {
        setCoins([...coins, newItem])
    }

    return (
        <div className="wish-div">
            <h1 className="wish-header">Wish List</h1>
            <h2 className="wish-second-header">Here you can keep track of projects you got your eye on.
                Fill out our form and the project will be added to your list!
            </h2>
            <div className="list-div">
            <CryptoForm coinsArray={coins} onItemFormSubmit={handleSubmit} />
                <ul>
                   {cryptoList}
                </ul>
            </div>
           
        </div>
    )
}

export default WishList