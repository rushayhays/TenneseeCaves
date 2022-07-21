import React from "react"
import "../styles/header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="headerLeft">
                <p id="logo">TennCaves</p>
            </div>

            <div className="headerMiddle">
                <p>User's Name here..</p>
                <p>User's Icon</p>
            </div>

            <div className="headerRight">
                <p id="logoutButton">Logout</p>
            </div>
        </div>
    );
}