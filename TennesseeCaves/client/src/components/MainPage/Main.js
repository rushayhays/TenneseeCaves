import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCaves } from "../../modules/caveManager";
import "../../styles/main.css"
import CaveCard from "../Caves/CaveCard";

export default function Main({isLoggedIn}){
    const [caves, setCaves] = useState([]);

    useEffect(()=>{
       getAllCaves().then((allCaves)=>{
       setCaves(allCaves)})
       
    }, [])

    return(
        <>
            {/* search bar, title, login and register buttons, and social media tags */}
            <div className="mainBanner">
                <div className ="mainBannerLeft"> {/*This is added for spacing, not much if anything will go here */}

                </div>
                <div className="mainBannerMiddle"> {/*The bulk of the main page's items go here. Search bar, Title, Login and Register Buttons*/}
                    <div className="upper_mainBannerMiddle">
                        <div>
                            <label></label>
                            <input type="text"></input>
                        </div>
                        {(isLoggedIn)?
                        <div>
                        </div>
                        :
                        <div>
                            <Link to="/login"><button>Login</button></Link>
                            <Link to="/register"><button>Register</button></Link>
                        </div>
                        }
                        
                    </div>
                    <div className="lower_mainBannerMiddle">
                        <h1>Explore Under Tennessee</h1>
                    </div>
                </div>
                <div className="mainBannerRight"> {/*Not much goes here either, but I'll probably put some social media links in*/}

                </div>
            </div>

            {/* display results */}
            <div className="mainSearch">
                <div className="mainSearchLeft">

                </div>
                <div className="mainSearchMiddle">
                    {(caves.count === 0)?
                    <div></div>
                    :
                    caves.map((cave)=>(
                        <CaveCard cave={cave} key={cave.id}/>
                    ))}
                </div>
                <div className="mainSearchRight">

                </div>
            </div>

        </>
    );
}