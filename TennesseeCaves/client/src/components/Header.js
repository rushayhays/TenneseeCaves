import React, { useEffect } from "react"
import "../styles/header.css"
import { logout } from "../modules/authManager"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "reactstrap";

export default function Header({isLoggedIn, user}){
    const headerLogout = () =>{
        logout();
    }

    
    useEffect(()=>{
    },[])

   

    return(
        <div className="header">
            <div className="headerLeft">
                <Link to={`/`}><p id="logo">TennCaves</p></Link>
            </div>

            <div className="headerMiddle">
                {(isLoggedIn)?
                    <div className="headerMiddleUserInfo">
                        {(user.isAdmin)?
                        <div className="headerViews">
                            <Link to="/userPage"><p>User View</p></Link>
                            <Link to="/adminPage"><p>Admin View</p></Link>
                        </div>
                        :
                        <div className="headerViews">
                        </div>
                        }
                        <div className="headerUser">
                            <Link to={`/userPage`}><p>Hello, {user?.name}</p></Link>
                            <img id="userIcon" src="https://assets.mycast.io/characters/mole-1017619-normal.jpg?1600621647" alt="user icon"/>
                        </div>
                    </div>
                    :
                    <div className="headerMiddleUserInfo">
                    </div>
                }
            </div>

            <div className="headerRight">
                {(isLoggedIn)?
                    <button id="logoutButton" onClick={headerLogout}>Logout</button>
                    :
                    <p></p>
                }
            </div>
        </div>
    );
}