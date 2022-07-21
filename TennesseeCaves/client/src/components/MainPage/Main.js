import React from "react";
import "../../styles/main.css"

export default function Main(){
    return(
        <>
            {/* search bar, title, login and register buttons, and social media tags */}
            <div className="mainBanner">
                <div className ="mainBannerLeft"> {/*This is added for spacing, not much if anything will go here */}

                </div>
                <div className="mainBannerMiddle"> {/*The bulk of the main page's items go here. Search bar, Title, Login and Register Buttons*/}
                    <h1>Explore Under Tennessee</h1>
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