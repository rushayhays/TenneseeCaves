import React, { useEffect, useState } from "react";
import "../../styles/manageCaves.css"
import AddRemoveOrgListItem from "../Organizations/AddRemoveOrgListItem";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getSingleCaveById, updateCaveOrganizations } from "../../modules/caveManager.js";
import { getAllOrganizations } from "../../modules/organizationManager.js";


export default function AddRemoveCaveOrganizations(){
    const navigate = useNavigate();
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

     const returnToManageCaves = () =>{
        navigate("/manageCaves")
    }


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

        updateCaveOrganizations(caveToSubmit).then(() => navigate("/manageCaves"));
     }


    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveLeft">

                </div>
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Manage Organizations for {cave.name}</h1>
                        <div className="mTourCenter_upper_addCave">
                            <div>
                                <p>{cave.name}</p>
                                <p>Access:{cave?.access.accessLevel}</p>
                                <p>{cave.location}</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="addEditCaveCenter_lower">
                        <button onClick={returnToManageCaves}>Return To Manage Caves</button>
                    </div>
                    <div className="addRemoveCaveOrg_title">
                        <h2>Organizations</h2>
                        <button onClick={runUpdate}>Update Organizations</button>
                    </div>
                    <div className="mCaveCenter_lower_caveList">
                        <div className="mCaveCenter_lower">
                            
                            
                            {(allOtherOrgs.count === 0)?
                                <div></div>
                                :
                                allOtherOrgs.map((org)=>(
                                    <AddRemoveOrgListItem organization={org} key={org.id} caveOrgs={caveOrgs} setCaveOrgs={setCaveOrgs} isLoading={isLoading}/>
                                    
                                ))}
                            </div>
                        </div>
                    </div>
                <div className="mCaveRight">

                </div>
            </div>

        </>
    );
}