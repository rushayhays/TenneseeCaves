import React, { useEffect, useState } from "react";
import { deleteCave, getAllCaves } from "../../modules/caveManager";
import "../../styles/manageCaves.css"
import CaveListItem from "./CaveListItem";
import { Link } from "react-router-dom";


export default function ManageCaves(){
    const [caves, setCaves] = useState([]);

    const renderCavePage = () =>{
        getAllCaves().then((allCaves)=>{
            setCaves(allCaves)
        })
    }

    useEffect(()=>{
        getAllCaves().then((allCaves)=>{
        setCaves(allCaves)})
        
     }, [])

     const handleDeleteCave = (id) => {
        deleteCave(id).then(()=>{
            renderCavePage();
        })
     }
    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveLeft">

                </div>
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Manage Caves</h1>
                        <div className="mCaveCenter_upper_addCave">
                           <Link to={"/manageCaves/addCave"}><p>Add a Cave</p></Link> 
                        </div>
                    </div>
                    <div className="mCaveCenter_lower">
                        <h3>Manage Existing Caves</h3>
                        <div className="mCaveCenter_lower_caveList">
                            {(caves.count === 0)?
                            <div></div>
                            :
                            caves.map((cave)=>(
                                <CaveListItem cave={cave} key={cave.id} handleDeleteCave={handleDeleteCave}/>
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