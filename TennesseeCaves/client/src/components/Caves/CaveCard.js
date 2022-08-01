import React from "react";
import { Link } from "react-router-dom";

export default function CaveCard({cave}){
    return(
        <div className="caveCard">
            <Link to={`/caveDetails/${cave.id}`}>
                <div className="caveCard_imageArea">
                    <img src={cave.bannerImageUrl} alt={cave.name}/>
                </div>
            </Link>
            <div>
                <p>{cave.name}</p>
                <div className="caveCard_aboutArea">
                    <p>{cave.about}</p>
                </div>
            </div>
        </div>
    );
}