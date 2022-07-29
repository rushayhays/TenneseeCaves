import { useNavigate, useParams } from "react-router-dom";

export default function CaveListItem({cave, handleDeleteCave}){
    const navigate = useNavigate();

    const goToEditPage = () =>{
        navigate(`/manageCaves/editCave/${cave.id}`)
    }

    const goToManageToursPage = () =>{
        navigate(`/manageCaves/caveTours/${cave.id}`)
    }

    const goToCaveOrganization = () =>{
        navigate(`/manageCaves/editOrganizations/${cave.id}`)
    }

    const deleteCaveListItem = () => {
        handleDeleteCave(cave.id)
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
                <button onClick={goToCaveOrganization}>Organizations</button>   
            </div>
            <div className="clc_deleteButton">
                <button onClick={deleteCaveListItem}>Delete</button>
            </div>

        </div>
    );
}