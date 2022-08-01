import React, { useEffect, useState } from "react";
import "../../styles/manageCaves.css"
import AddRemoveOrgListItem from "../Organizations/AddRemoveOrgListItem";
import { Link, useParams } from "react-router-dom";
import { getSingleCaveById, updateCaveOrganizations } from "../../modules/caveManager.js";
import { getAllOrganizations } from "../../modules/organizationManager.js";


export default function AddRemoveCaveOrganizations(){
    const {id} = useParams();
    const [allOtherOrgs, setAllOtherOrgs] = useState([]);
    const [caveOrgs, setCaveOrgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [cave, setCave] = useState(
        {
            id: 0,
            name:"",
            accessId:0,
            website:"",
            location:"",
            about:"",
            dateAdded:"2022-05-23",
            organizations: [],
            tours:[],
            images:[],
            access:{
                id:0,
                accessLevel:""
            }

        }
    );
       

    useEffect(()=>{
        getAllOrganizations().then((allOrgs)=>{
            setAllOtherOrgs(allOrgs)
        })
        getSingleCaveById(id).then((singleCave)=>{
            setCave(singleCave)
            setCaveOrgs(singleCave.organizations)
            setIsLoading(false)
        })
     }, [])


     const runUpdate = () =>{
        var caveToSubmit = {
            id: cave.id,
            name:cave.name,
            accessId:cave.accessId,
            website:cave.website,
            location:cave.location,
            about:cave.about,
            dateAdded: cave.dateAdded,
            organizations: caveOrgs,
            tours:[],
            images:[],
            access:{
                id:0,
                accessLevel:""
            }
        } 

        updateCaveOrganizations(caveToSubmit)
     }


    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Manage Tours for {cave.name}</h1>
                        <div className="mTourCenter_upper_addCave">
                            <div>
                                <p>{cave.name}</p>
                                <p>Access:{cave?.access.accessLevel}</p>
                                <p>{cave.location}</p>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="mCaveCenter_lower">
                        <h3>All Organizations  to Possibly Add To Caverns</h3> <button onClick={runUpdate}>Update Organizations</button>
                        <div className="mCaveCenter_lower_caveList">
                        {(allOtherOrgs.count === 0)?
                            <div></div>
                            :
                            allOtherOrgs.map((org)=>(
                                <AddRemoveOrgListItem organization={org} key={org.id} caveOrgs={caveOrgs} setCaveOrgs={setCaveOrgs} isLoading={isLoading}/>
                                
                            ))}
                        </div>
                    </div>
            
                </div>

            </div>

        </>
    );
}