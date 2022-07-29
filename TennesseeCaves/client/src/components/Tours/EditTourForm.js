import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom";
import { getSingleTour, updateTour } from "../../modules/tourManager";

export default function EditTourForm(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [tour, setTour] = useState({
        id:0,
        caveId:0,
        timeOfDay:"",
        timeOfYear:"",
        price:0,
        peoplePerTour:0
    });

    useEffect(()=>{
        getSingleTour(id).then((tour)=>{
            setTour(tour)
        })
    },[])

    const handleEdit = (e) =>{
        //this will handle all text inputs
        const tourToEdit = {...tour};
        tourToEdit[e.target.id] = e.target.value;
        setTour(tourToEdit)
    }


    const registerClick = (e) => {
        //This needs work
        updateTour(tour);
    };
    const returnToManageTours = () =>{
        navigate("/manageCaves")
    }

    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Edit a Tour</h1>
                        <div className="mCaveCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="timeOfDay">Time of Day</Label>
                                    <Input
                                        id="timeOfDay"
                                        type="text"
                                        onChange={handleEdit}
                                        value={tour.timeOfDay}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="timeOfYear">Time Of Year</Label>
                                    <Input
                                        id="timeOfYear"
                                        type="text"
                                        onChange={handleEdit}
                                        value={tour.timeOfYear}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input
                                        id="price"
                                        type="price"
                                        onChange={handleEdit}
                                        value={tour.price}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="peoplePerTour">People Per Tour</Label>
                                    <Input
                                        id="peoplePerTour"
                                        type="peoplePerTour"
                                        onChange={handleEdit}
                                        value={tour.peoplePerTour}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Button>Register</Button>
                                    </FormGroup>
                                </fieldset>
                            </Form>
                        </div>
                    </div>
                    <div className="mCaveCenter_lower">
                        <button onClick={returnToManageTours}>Return To Manage Tours</button>
                        <div className="mCaveCenter_lower_caveList">
                            <p>caveTable wuz here</p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}