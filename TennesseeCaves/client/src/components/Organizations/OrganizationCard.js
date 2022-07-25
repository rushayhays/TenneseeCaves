import React from "react";
import "../../styles/organizationCard.css";

export default function OrganizationCard ({organization}){
    return(
        <div className="orgCard">
            <div className="orgCard_imageArea">
                <img src={organization.orgImage} alt={organization.name}/>
            </div>
            <div>
                <p>{organization.name}</p>
                <p>{organization.about}</p>
            </div>
        </div>
    );
}