import "../../styles/main.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleCaveById } from "../../modules/caveManager";
import {OrganizationCard} from "../Organizations/OrganizationCard.js"

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
            <div className="mainBanner">
                <div className ="mainBannerLeft"> {/*This is added for spacing, not much if anything will go here */}
                </div>

                <div className="mainBannerMiddle"> {/*The bulk of the caveDetails Banner items go here. Title*/}
                    <div className="upper_mainBannerMiddle">
                    </div>
                    <div className="lower_mainBannerMiddle">
                        <h1>{cave.name}</h1>
                        <h3>Access: Public</h3>
                        <h3>{cave.location}</h3>
                    </div>
                </div>

                <div className="mainBannerRight"> {/*Not much goes here either, but I'll probably put some social media links in*/}
                </div>
            </div>

            {/* display results */}
            <div className="mainSearch">
                <div className="mainSearchLeft">
                </div>

                <div className="mainSearchMiddle">  {/*This will hold all the info about the cave */}
                    <h2>About</h2>
                    <p>{cave.about}</p>
                    <h2>Organizations</h2>
                    {(organizations.count === 0)?
                    <div></div>
                    :
                    organizations.map((org)=>(
                        <OrganizationCard organization={org} key={org.id}/>
                    ))}

                  
                </div>
                <div className="mainSearchRight">

                </div>
            </div>

        </>
    );
}