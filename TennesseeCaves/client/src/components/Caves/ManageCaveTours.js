import React, { useEffect, useState } from "react";
import { getAllToursForASpecificCave } from "../../modules/tourManager.js"
import "../../styles/manageCaves.css"
import TourListItem from "../Tours/TourListItem.js";
import { Link, useParams } from "react-router-dom";
import { getSingleCaveById } from "../../modules/caveManager.js";
import AddTourForm from "../Tours/AddTourForm.js";


export default function ManageCaveTours(){
    const {id} = useParams();
    const [tours, setTours] = useState([]);
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

        });

    useEffect(()=>{
        getAllToursForASpecificCave(id).then((allTours)=>{
        setTours(allTours)})
        getSingleCaveById(id).then((singleCave)=>{
            setCave(singleCave)
        })
     }, [])
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
                            {/* Need to create a page for this link */}
                           <AddTourForm cave={cave} key={cave.id}/> 
                        </div>
                    </div>
                    <div className="mCaveCenter_lower">
                        <h3>Manage Existing Tours</h3>
                        <div className="mCaveCenter_lower_caveList">
                            {(tours.count === 0)?
                            <div></div>
                            :
                            tours.map((tour)=>(
                                <TourListItem tour={tour} key={tour.id}/>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}