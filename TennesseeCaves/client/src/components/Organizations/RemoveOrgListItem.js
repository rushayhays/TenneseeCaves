import { useNavigate, useParams } from "react-router-dom";

export default function RemoveOrgListItem({organization, caveOrgs, allOtherOrgs}){
    const navigate = useNavigate();
    const goToEditPage = () =>{
        navigate(`/manageOrganizations/editOrganization/${organization.id}`)
    }

    return(
        <div className="caveListCard">
            <div className="clc_pic">
                <img src={organization.orgImage} alt={organization.name}/>
            </div>
            <div className="clc_name">
                <p>{organization.name}</p>
            </div>
            
            <div className="clc_deleteButton">
                <button>Remove</button>
            </div>

        </div>
    );
}