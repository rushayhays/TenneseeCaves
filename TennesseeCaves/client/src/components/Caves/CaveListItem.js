import { useNavigate, useParams } from "react-router-dom";

export default function CaveListItem({cave}){
    const navigate = useNavigate();

    const goToEditPage = () =>{
        navigate(`/manageCaves/editCave/${cave.id}`)
    }

    const goToManageToursPage = () =>{
        navigate(`/manageCaves/caveTours/${cave.id}`)
    }

    return(
        <div className="caveListCard">
            <div className="clc_pic">
                <img src={cave.bannerImageUrl} alt={cave.name}/>
            </div>
            <div className="clc_name">
                <p>{cave.name}</p>
            </div>
            <div className="clc_linkButton">
                <button onClick={goToEditPage}>General Info</button>
            </div>
            <div className="clc_linkButton">
                <button onClick={goToManageToursPage}>Tours</button>   
            </div>
            <div className="clc_linkButton">
                <button>Organizations</button>   
            </div>
            <div className="clc_deleteButton">
                <button>Delete</button>
            </div>

        </div>
    );
}