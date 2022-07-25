import "../../styles/caveDetails.css"
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCaveById } from "../../modules/caveManager";
import OrganizationCard from "../Organizations/OrganizationCard";
import TourCard from "../Tours/TourCard";

export default function CaveDetails (){
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
            images:[]

        });
    const { id } = useParams();

    useEffect(()=>{
        getSingleCaveById(id).then((singleCave)=>{
            setCave(singleCave)
        })
    })
    return(
        <>
            {/* search bar, title, login and register buttons, and social media tags */}
            <div className="caveBanner">
                <div className ="caveBannerLeft"> {/*This is added for spacing, not much if anything will go here */}
                </div>

                <div className="caveBannerMiddle"> {/*The bulk of the caveDetails Banner items go here. Title*/}
                    <div className="upper_caveBannerMiddle">
                    </div>
                    <div className="lower_caveBannerMiddle">
                        <h1>{cave.name}</h1>
                        <h3>Access: Public</h3>
                        <h3>{cave.location}</h3>
                    </div>
                </div>

                <div className="caveBannerRight"> {/*Not much goes here either, but I'll probably put some social media links in*/}
                </div>
            </div>

            {/* display results */}
            <div className="caveSearch">
                <div className="caveSearchLeft">
                </div>

                <div className="caveSearchMiddle">  {/*This will hold all the info about the cave */}
                    <div className="caveSearchMiddle_aboutArea">
                        <h2>About</h2>
                        <p>{cave.about}</p>
                    </div>
                    <div className="caveSearchMiddle_tourArea">
                        <h2>Tours</h2>
                        {(cave.tours.count === 0)?
                            <div></div>
                            :
                            <div className="tourArea_cardArea">
                            {cave.tours.map((tour)=>(
                                <TourCard tour={tour} key={tour.id}/>
                            ))}
                            </div>
                        }
                    </div>
                    <div className="caveSearchMiddle_orgArea">
                        <h2>Organizations</h2>
                        {(cave.organizations.count === 0)?
                        <div></div>
                        :
                        cave.organizations.map((org)=>(
                            <OrganizationCard organization={org} key={org.id}/>
                        ))}
                    </div>
                </div>
                <div className="caveSearchRight">

                </div>
            </div>

        </>
    );
}