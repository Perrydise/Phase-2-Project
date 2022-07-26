import React from "react";

function CryptoItem(name, description, onDelete, key) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/Coins/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDelete(id))
    }

    return (
        <li key={key}>
            <h1>name: {name}</h1>
            <p>Description: {description} </p>
        <button onClick={handleDeleteClick}>Delete</button>
        </li>
    )
}

export default CryptoItem