import React from "react";

function CryptoForm () {
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