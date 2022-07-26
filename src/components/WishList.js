import React, { useEffect, useState } from "react";
import CryptoForm from "./CryptoForm";

function WishList() {
    const [coins, setCoins] = useState([])
    const [newArray, setNewArray] = useState()
    

    useEffect(() => {
        fetch("http://localhost:3000/coins")
        .then((r) => r.json())
        .then((coins) => setCoins(coins))
        .catch((error) => console.log(error))
 }, [])

    function handleDeleteQuestion(deletedQuestionId) {
        const updatedCryptoList = coins.filter((coins) => {
            console.log(deletedQuestionId, coins, coins.id)
            return deletedQuestionId != coins.id
        })
        console.log(updatedCryptoList)
    }

 const cryptoList = coins.map((element, index) => {
    const name = element.name
    const description = element.description
    return <li key={index}>{name}: {description}</li> })
    

    function handleSubmit(newItem) {
        setNewArray([...newArray, newItem])
    }

    return (
        <div className="wish-div">
            <h1>Wish List</h1>
            <h2>Here you can keep track of projects you got your eye on.
                Fill out our form and the project will be added to your list!
            </h2>
            <div className="list-div">
            <CryptoForm coinsArray={coins} onItemFormSubmit={handleSubmit} onDelete={handleDeleteQuestion}/>
                <ul>
                    Project watch list
                   {cryptoList}
                </ul>
            </div>
           
        </div>
    )
}

export default WishList