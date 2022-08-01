import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCaveFromUserPage, updateCaveIsFavoriteStatus, getAllUsersCaves } from "../../modules/caveManager";


export default function UserCaveCard({cave, unFavoriteCave, favoriteACave, removeCaveFromUserPage}){

    
    const unFavCave = () =>{
        unFavoriteCave(cave)
    }
    const favACave = ()=> {
        favoriteACave(cave)
    }
    const removeCaveFUP = () =>{
        removeCaveFromUserPage(cave)
    }


    return(
        <div className="caveCard">
                <div className="caveCard_imageArea">
                    <Link to={`/caveDetails/${cave.id}`}>
                        <img src={cave.bannerImageUrl} alt={cave.name}/>
                    </Link>
                </div>
                <div className="userCaveCardDetails">
                    <div className="userCaveCard_upper">
                        <p>{cave.name}</p>
                        {(cave.isFavorite==true)?
                            <button className="unfavoriteButton" onClick={unFavCave}>
                                <img src="https://media.istockphoto.com/vectors/yellow-star-icon-vector-id1138148927?k=20&m=1138148927&s=170667a&w=0&h=g9luU7DzUMqOCv46ZRiSDiSdsyQqtV6UWfsN2AF1B2I=" alt="favorite star"></img>
                            </button>
                            :
                            <button className="favoriteButton" onClick={favACave}>
                                <img src="https://www.seekpng.com/png/small/207-2073568_dxm-star-review-comments-rounded-star-svg.png" alt="not favorite star"></img>
                            </button>
                        }
                    </div>
                    <p>{cave.about}</p>
                    <button onClick={removeCaveFUP}>Remove Cave</button>
                </div>
            </div>
    );
}