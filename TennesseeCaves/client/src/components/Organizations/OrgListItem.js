export default function OrgListItem({organization}){
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
            <div className="clc_linkButton">
                <button>Edit</button>   
            </div>
            <div className="clc_deleteButton">
                <button>Delete</button>
            </div>

        </div>
    );
}