import React, { useEffect, useState } from "react";
import { getAllCaves } from "../../modules/caveManager";
import "../../styles/manageCaves.css"
import CaveListItem from "./CaveListItem";

export default function ManageCaves(){
    const [caves, setCaves] = useState([]);

    useEffect(()=>{
        getAllCaves().then((allCaves)=>{
        setCaves(allCaves)})
        
     }, [])
    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Manage Caves</h1>
                        <div className="mCaveCenter_upper_addCave">
                            <p>Add a Cave</p>
                        </div>
                    </div>
                    <div className="mCaveCenter_lower">
                        <h3>Manage Existing Caves</h3>
                        <div className="mCaveCenter_lower_caveList">
                            {(caves.count === 0)?
                            <div></div>
                            :
                            caves.map((cave)=>(
                                <CaveListItem cave={cave} key={cave.id}/>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}