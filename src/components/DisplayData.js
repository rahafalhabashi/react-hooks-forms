import React from "react";

function DisplayData({firstName, lastName}) {
    return (
        <div>
            <h1>First name: {firstName}</h1>
            <h1>Last name: {lastName} </h1>
        </div>
    )
}

export default DisplayData;