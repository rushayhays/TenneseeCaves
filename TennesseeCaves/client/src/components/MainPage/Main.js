import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getAllCaves, searchCaves } from "../../modules/caveManager";
import "../../styles/main.css"
import CaveCard from "../Caves/CaveCard";

export default function Main({isLoggedIn}){
    const [caves, setCaves] = useState([]);
    const [searchQuery, setSearchQuery] = useState();
    const [searchedCaves, setSearchedCaves] = useState([]);

    useEffect(()=>{
       getAllCaves().then((allCaves)=>{
       setCaves(allCaves)})
       
    }, [])

   const searchInput = useRef(null);

    const logSearchResults = () => {
        searchCaves(searchQuery).then((allSearchedCaves) => {
            setSearchedCaves(allSearchedCaves)
            searchInput.current.value = "";
        })
        
    }

    const handleSearchChange = (e) =>{
        setSearchQuery(e.target.value)
    }

    const clearSearchResults = () => {
        var emptyArray = [];
        setSearchedCaves(emptyArray);
    }

    


    return(
        <>
            {/* search bar, title, login and register buttons, and social media tags */}
            <div className="mainBanner">
                <div className ="mainBannerLeft"> {/*This is added for spacing, not much if anything will go here */}

                </div>
                <div className="mainBannerMiddle"> {/*The bulk of the main page's items go here. Search bar, Title, Login and Register Buttons*/}
                    <div className="upper_mainBannerMiddle">
                        <div className="searchBar">
                            <label htmlFor="search"></label>
                            <input id="search" type="text" onChange={handleSearchChange} ref={searchInput}></input>
                            {/* <input id="search" type="text" onChange={(e)=>setSearchQuery(e.target.value)}></input> */}
                            <button id="searchButton" onClick={logSearchResults}>Seach Caves</button>
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
                    {(searchedCaves.length === 0 )?
                        <div>

                        </div>
                        :
                        <div className="dynamicSearchResults_area">
                            <h3>Search Results</h3>
                            <div className="dynamicSearchResults_results">
                                {searchedCaves.map((cave)=>(
                                    <CaveCard cave={cave} key={cave.id}/>
                                ))}
                            </div>
                            <button onClick={clearSearchResults}>Clear Search Results</button>
                        </div>
                    }

                    {/* The above is search results, the below is the usual caves */}

                    {(caves.count === 0)?
                    <div></div>
                    :
                    <div className="mainSearchMiddle_allCaves">
                        {caves.map((cave)=>(
                            <CaveCard cave={cave} key={cave.id}/>
                        ))}
                    </div>
                    }
                </div>
                <div className="mainSearchRight">

                </div>
            </div>

        </>
    );
}