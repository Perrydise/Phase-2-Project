import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CryptoForm ({ onItemFormSubmit }) {
    const [newName, setNewName] = useState("")
    const [newDescription, setNewDescription] = useState("")

    function handleCoinName (event) {
        setNewName(event.target.value)
    }

    function handleCoinDescription (event) {
        setNewDescription(event.target.value)
    }

    function handleCoinSubmit(event) {
        event.preventDefault()
        const newItem = {
            id: uuid(),
            name: newName,
            description: newDescription
        }
        fetch("http://localhost:3000/coins", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
  onItemFormSubmit(newItem)
  setNewName("")
  setNewDescription("")
    }

return(
    <form className="new-crpyto-form" onSubmit={handleCoinSubmit}>
       <label>
        Please enter your projects info
        <input type="text" name="Project name" value={newName} onChange={handleCoinName}/>
        </label>
        <input type="text" name="Description" value={newDescription} onChange={handleCoinDescription}/>
        <input type="submit" value="Add project"/>
    </form>
)
}

export default CryptoForm