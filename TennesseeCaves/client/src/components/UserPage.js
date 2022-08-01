import React from "react";
import "../styles/userPage.css"
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { getAllUsersCaves, updateCaveIsFavoriteStatus,deleteCaveFromUserPage } from "../modules/caveManager.js"
import UserCaveCard from "../components/Caves/UserCaveCard"
import { useParams } from "react-router-dom";

export default function UserPage({user}){
    const [caves, setCaves] = useState([]);

    const renderUserPage = (id) =>{
        getAllUsersCaves(id).then((allCaves)=>{
            setCaves(allCaves)
        })
        
    }
    useEffect(()=>{
        getAllUsersCaves(user.id).then((allCaves)=>{
        setCaves(allCaves)})
    }, [])

    //All the functions that control what the buttons on the userCave cards do, need to be on this main page and then 
    //passed into each card, so that the page can refresh properly after a button is pushed
    const unFavoriteCave = (cave) =>{
        var userCaveToChange = {
            id:0,
            userProfileId:user.id,
            caveId: cave.id,
            isFavorite: false,
            whenAdded: cave.whenAdded
        }
        updateCaveIsFavoriteStatus(userCaveToChange).then(()=>{
            getAllUsersCaves(user.id).then((allCaves)=>{
                setCaves(allCaves)
            })
        })
    }

    const favoriteACave = (cave) =>{
        var userCaveToChange = {
            id:0,
            userProfileId:user.id,
            caveId: cave.id,
            isFavorite: true,
            whenAdded: cave.whenAdded
        }
        updateCaveIsFavoriteStatus(userCaveToChange).then(()=>{
            getAllUsersCaves(user.id).then((allCaves)=>{
                setCaves(allCaves)
            })
        })
    }
    const removeCaveFromUserPage = (cave) =>{
        var userCaveToChange = {
            userProfileId:user.id,
            caveId: cave.id,
            isFavorite: cave.isFavorite,
            whenAdded: cave.whenAdded
        }
        deleteCaveFromUserPage(userCaveToChange).then(()=>{
            getAllUsersCaves(user.id).then((allCaves)=>{
                setCaves(allCaves)
            })
        })
    }

    return(
        <>
            {/* search bar, title, login and register buttons, and social media tags */}
            <div className="userBanner">
                <div className ="userBannerLeft"> {/*This is added for spacing, not much if anything will go here */}

                </div>
                <div className="userBannerMiddle"> {/*The bulk of the user page's items go here. Search bar, Title, Login and Register Buttons*/}
                    <div className="upper_userBannerMiddle">
                        <div className="searchBar">
                            <label htmlFor="search"></label>
                            <input id="search" type="text"></input>
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
                        <UserCaveCard cave={cave} key={cave.id} unFavoriteCave={unFavoriteCave} favoriteACave={favoriteACave} removeCaveFromUserPage={removeCaveFromUserPage}/>
                    ))}
                </div>
                <div className="userSearchRight">

                </div>
            </div>

        </>
    );
}