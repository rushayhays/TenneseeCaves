import React from "react";
import "../../styles/tourCard.css"

export default function TourCard({tour}) {
    return(
        <div className="tourCard">
            <div>
                <p>Time of Day:{tour.timeOfDay}</p>
                <p>Time of Year:{tour.timeOfYear}</p>
                <p>Price Per Person:{tour.price}</p>
                <p>Max People Alowed:{tour.peoplePerTour}</p>
            </div>
        </div>
    );
}