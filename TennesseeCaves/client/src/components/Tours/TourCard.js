import React from "react";
import "../../styles/tourCard.css"

export default function TourCard({tour}) {
    return(
        <div className="tourCard">
            <div>
                <p>{tour.timeOfDay}</p>
                <p>{tour.price}</p>
            </div>
        </div>
    );
}