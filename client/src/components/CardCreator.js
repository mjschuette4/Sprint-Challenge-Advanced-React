import React from "react";

export default function CardCreator(props) {

    if (props.player) {return null}
    return (
        <div>
            <p>Name: {props.player.name}</p>
            <p> Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}