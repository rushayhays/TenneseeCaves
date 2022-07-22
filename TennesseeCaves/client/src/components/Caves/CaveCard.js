import React from "react";

export default function CaveCard({cave}){
    return(
        <div className="caveCard">
            <div className="caveCard_imageArea">
                <img src={cave.bannerImageUrl} alt={cave.name}/>
            </div>
            <div>
                <p>{cave.name}</p>
                <p>{cave.about}</p>
            </div>
        </div>
    );
}