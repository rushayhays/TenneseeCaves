import { useNavigate, useParams } from "react-router-dom";

export default function OrgListItem({organization, deleteAnOrg}){
    const navigate = useNavigate();
    const goToEditPage = () =>{
        navigate(`/manageOrganizations/editOrganization/${organization.id}`)
    }

    const useDeleteButton = () => {
        deleteAnOrg(organization.id)
    }

    return(
        <div className="caveListCard">
            <div className="clc_pic">
                <img src={organization.orgImage} alt={organization.name}/>
            </div>
            <div className="clc_name">
                <p>{organization.name}</p>
            </div>
            <div className="clc_name">
                <p>{organization.website}</p>
            </div>
            <div className="editDeleteButton">
                <div className="clc_linkButton">
                    <button onClick={goToEditPage}>Edit</button>   
                </div>
                <div className="clc_deleteButton">
                    <button onClick={useDeleteButton}>Delete</button>
                </div>
            </div>

        </div>
    );
}