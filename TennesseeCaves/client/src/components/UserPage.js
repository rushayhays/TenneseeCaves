import React from "react";
import "../styles/userPage.css"
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { getAllUsersCaves } from "../modules/caveManager.js"
import CaveCard from "../components/Caves/CaveCard"

export default function UserPage({user}){
    const [caves, setCaves] = useState([]);

    useEffect(()=>{
       getAllUsersCaves(user.id).then((allCaves)=>{
       setCaves(allCaves)})
       
    }, [])

    return(
        <>
            {/* search bar, title, login and register buttons, and social media tags */}
            <div className="userBanner">
                <div className ="userBannerLeft"> {/*This is added for spacing, not much if anything will go here */}

                </div>
                <div className="userBannerMiddle"> {/*The bulk of the user page's items go here. Search bar, Title, Login and Register Buttons*/}
                    <div className="upper_userBannerMiddle">
                        <div>
                            <label></label>
                            <input type="text"></input>
                        </div>
                        
                        <div>
                        </div>
                        
                        
                    </div>
                    <div className="lower_userBannerMiddle">
                        <h1>My Adventure</h1>
                    </div>
                </div>
                <div className="userBannerRight"> {/*Not much goes here either, but I'll probably put some social media links in*/}

                </div>
            </div>

            {/* display results */}
            <div className="userSearch">
                <div className="userSearchLeft">

                </div>
                <div className="userSearchMiddle">
                    {(caves.count === 0)?
                    <div></div>
                    :
                    caves.map((cave)=>(
                        <CaveCard cave={cave} key={cave.id}/>
                    ))}
                </div>
                <div className="userSearchRight">

                </div>
            </div>

        </>
    );
}