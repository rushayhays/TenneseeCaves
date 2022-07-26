export default function CaveListItem({cave}){
    return(
        <div className="caveListCard">
            <div className="clc_pic">
                <img src={cave.bannerImageUrl} alt={cave.name}/>
            </div>
            <div className="clc_name">
                <p>{cave.name}</p>
            </div>
            <div className="clc_linkButton">
                <button>General Info</button>
            </div>
            <div className="clc_linkButton">
                <button>Tours</button>   
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