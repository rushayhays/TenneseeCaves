import React from "react";
import { Link } from "react-router-dom";

export default function CaveCard({cave}){
    return(
        <Link to={`/caveDetails/${cave.id}`}>
            <div className="caveCard">
                <div className="caveCard_imageArea">
                    <img src={cave.bannerImageUrl} alt={cave.name}/>
                </div>
                <div>
                    <p>{cave.name}</p>
                    <p>{cave.about}</p>
                </div>
            </div>
        </Link>
    );
}