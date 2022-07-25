import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CryptoForm ({ onItemFormSubmit}) {
    const [newName, setNewName] = useState("")
    const [newDescription, setNewDescription] = useState("")

    function handleCoinName (event) {
        setNewName(event.target.value)
    }

    function handleCoinDescription (event) {
        setNewDescription(event.target.value)
    }

    function handleCoinSubmit() {
        const newItem = {
            id: uuid(),
            name: newName,
            description: newDescription
        }
    }

return(
    <form className="new-crpyto-form">
       <label>
        Please enter your projects info
        <input type="text" name="Project name"/>
        </label>
        <input type="text" name="Project Chain"/>
        <input type="submit" value="Add project"/>
    </form>
)
}

export default CryptoForm