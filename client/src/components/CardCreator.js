import React from "react";

export default function CardCreator(props) {
//setting up format for the cards and what data is in the cards
    if (!props.player) {return null}
    return (
        <div className="playerCard" >
            <p htmlFor="name">Name: {props.player.name}</p>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}