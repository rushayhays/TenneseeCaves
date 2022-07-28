import React, { useEffect, useState } from "react";
import "../../styles/manageCaves.css"
import OrgListItem from "./OrgListItem";
import { Link } from "react-router-dom";
import { getAllOrganizations } from "../../modules/organizationManager";

export default function ManageOrganizations(){
    const [orgs, setOrgs] = useState([]);

    useEffect(()=>{
        getAllOrganizations().then((allOrgs)=>{
        setOrgs(allOrgs)})
        
     }, [])
    return(
        <>
        <div className="mCaveMain">
            <div className="mCaveCenter">
                <div className="mCaveCenter_upper">
                    <h1>Manage Organizations</h1>
                    <div className="mCaveCenter_upper_addCave">
                       <Link to={"/manageOrganizations/addOrganization"}><p>Add an Organization</p></Link> 
                    </div>
                </div>
                <div className="mCaveCenter_lower">
                    <h3>Manage Existing Organizations</h3>
                    <div className="mCaveCenter_lower_caveList">
                    {(orgs.count === 0)?
                            <div></div>
                            :
                            orgs.map((org)=>(
                                <OrgListItem organization={org} key={org.id}/>
                            ))}
                    </div>

                </div>
            </div>
        </div>
    </>
    );
}