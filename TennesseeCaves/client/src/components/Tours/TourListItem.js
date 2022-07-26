import { useNavigate, useParams } from "react-router-dom";

export default function TourListItem({tour, deleteSelectedTour}){
    const navigate = useNavigate();
    const goToEditPage = () =>{
        navigate(`/manageCaves/editTour/${tour.id}`)
    }

    const useDeleteButton = () => {
        deleteSelectedTour(tour.id)
    }

    return(
        <div className="caveListCard">
            <div className="tour_pic">
                <img src="https://cdn-adventures-live.azureedge.net/adventurescache/2/3/f/2/b/6/23f2b6b64687d8dbba879501e6f3a172e8b869ed.jpg" alt="guided cave tour"/>
            </div>
            <div className="clc_name">
                <p>Time of Day</p>
                <p>{tour.timeOfDay}</p>
            </div>
            <div className="clc_name">
                <p>Time of Year</p>
                <p>{tour.timeOfYear}</p>
            </div>
            <div className="clc_name">
                <p>Price:</p>
                <p>${tour.price}</p>
            </div>
            <div className="clc_name">
                <p>People Per Tour</p>
                <p>(Max){tour.peoplePerTour}</p>
            </div>
            <div className="clc_linkButton">
                <button onClick={goToEditPage}>Edit</button>   
            </div>
            <div className="clc_deleteButton">
                <button onClick={useDeleteButton}>Delete</button>
            </div>

        </div>
    );
}