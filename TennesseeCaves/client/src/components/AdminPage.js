import React from "react";
import { Link } from "react-router-dom";
import "../styles/adminPage.css"

export default function AdminPage(){
    return(
        <>
        {/* search bar, title, login and register buttons, and social media tags */}
        <div className="adminBanner">
            <div className ="adminBannerLeft"> {/*This is added for spacing, not much if anything will go here */}

            </div>
            <div className="adminBannerMiddle"> {/*The bulk of the admin page's items go here. Search bar, Title, Login and Register Buttons*/}
                <div className="upper_adminBannerMiddle">
                    <div>
                        <label></label>
                        <input type="text"></input>
                    </div>
                    
                    <div>
                    </div>
                    
                    
                </div>
                <div className="lower_adminBannerMiddle">
                    <h1>Manage TennCaves</h1>
                    <div className="adminCardArea">
                        <div className="adminCard">
                            <Link to={"/manageCaves"}>
                                <div className="adminCard_imageArea">
                                    <img src="https://i.natgeofe.com/n/f3500942-4eb9-4dfa-b6c9-53cd5510cd46/47789_16x9.jpg?w=1200" alt="cave Image"/>
                                </div>
                            </Link>
                                <div>
                                    <p>click this too manage caves</p>
                                </div>
                        </div>
                        <div className="adminCard">
                            <Link to={"/manageOrganizations"}>
                                <div className="adminCard_imageArea">
                                    <img src="https://www.nps.gov/wica/planyourvisit/images/Ranger-Tammy-Wright-edit.jpg?maxwidth=1200&maxheight=1200&autorotate=false" alt="organizations, Ranger Tammy Wright"/>
                                </div>
                            </Link>
                                <div>
                                    <p>click this to manage organizations</p>
                                </div>
                        </div>
                        <div className="adminCard">
                            <Link to={"/manageCaves"}>
                                <div className="adminCard_imageArea">
                                    <img src="https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/0157feb3d7054a7294dce785fbbca5ec" alt="User Profile Image"/>
                                </div>
                            </Link>
                                <div>
                                    <p>click this to manage users</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adminBannerRight"> {/*Not much goes here either, but I'll probably put some social media links in*/}

            </div>
        </div>

        {/* display results */}
        <div className="adminSearch">
            <div className="adminSearchLeft">

            </div>
            <div className="adminSearchMiddle">
               
            </div>
            <div className="adminSearchRight">

            </div>
        </div>

    </>
    );
}