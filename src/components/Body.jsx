import React from "react";

function Body({name,image}){
    
    return(
        <div>
            <ul>
                <li>
                    <p>{name}</p>
                    <img src={image} alt="food" width="100px" height="100px"></img>
                </li>
            </ul>
        </div>
    )
}


export default Body