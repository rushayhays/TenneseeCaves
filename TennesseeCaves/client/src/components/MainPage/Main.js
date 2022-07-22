import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.css"

export default function Main({isLoggedIn}){
    
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
                    {/* These are a placeholder until I geth the display caves to work */}
                    <div className="caveCard">
                        <div className="caveCard_imageArea">
                            <img src="https://discoverbristol.org/wp-content/uploads/2020/07/bristol-caves-underground-trip-ideas-hero.jpg" alt="bristol caverns"/>
                        </div>
                        <div>
                            <p>Now pretend I have a cave name</p>
                            <p>Also pretend there is interesting info</p>
                        </div>
                    </div>
                    <div className="caveCard">
                        <p>Pretend I'm a cool picture</p>
                        <p>Now pretend I have a cave name</p>
                        <p>Also pretend there is interesting info</p>
                    </div>
                    <div className="caveCard">
                        <p>Pretend I'm a cool picture</p>
                        <p>Now pretend I have a cave name</p>
                        <p>Also pretend there is interesting info</p>
                    </div>
                    <div className="caveCard">
                        <p>Pretend I'm a cool picture</p>
                        <p>Now pretend I have a cave name</p>
                        <p>Also pretend there is interesting info</p>
                    </div>
                    <div className="caveCard">
                        <p>Pretend I'm a cool picture</p>
                        <p>Now pretend I have a cave name</p>
                        <p>Also pretend there is interesting info</p>
                    </div>
                </div>
                <div className="mainSearchRight">

                </div>
            </div>

        </>
    );
}