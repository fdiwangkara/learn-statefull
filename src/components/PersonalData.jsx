import React from "react";
import Header from "./header";
import Body from "./Body";
    
function PersonalData(){
    const favoritefood = [
        {
            name: "Mie Ayam",
            image: "img/mi ayam.jpg"
        },
        {
            name: "Bakso",
            image: "img/bakso.jpg"
        },
        {
            name: "Es Krim",
            image: "img/eskrim.jpg"
        },
        {
            name: "Martabak",
            image: "img/martabak.jpe"
        },
        {
            name: "Indomie",
            image: "img/indomie.jpeg"
        },
    ]
    return (
        <div>
            <Header name="ilhami" kelas="10 PPLG 1"/>
            <p>My Favorite Food is :</p>
            {
                favoritefood.map((foods) => (
                    <Body {...foods} key={foods}/>
                ))
                }
        </div>
    )
}
export default PersonalData