import React from "react"
import "../styles/header.css"
import { logout } from "../modules/authManager"

export default function Header({isLoggedIn, user}){
    const headerLogout = () =>{
        logout();
    }
    return(
        <div className="header">
            <div className="headerLeft">
                <p id="logo">TennCaves</p>
            </div>

            <div className="headerMiddle">
                {(isLoggedIn)?
                    <div className="headerMiddleUserInfo">
                        <p>Hello, {user?.name}</p>
                        <img id="userIcon" src="https://assets.mycast.io/characters/mole-1017619-normal.jpg?1600621647" alt="user icon"/>
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