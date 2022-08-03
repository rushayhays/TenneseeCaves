import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom";
import { getSingleTour, updateTour } from "../../modules/tourManager";
import "../../styles/editTour.css";

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
        e.preventDefault();
        updateTour(tour).then(()=>{
            returnToManageTours();
        })
    };
    const returnToManageTours = () =>{
        navigate(`/manageCaves/caveTours/${tour.caveId}`)
    }

    return(
        <>
            <div className="editTourMain">
                <div className="editTourCenter">
                    <div className="editTourCenter_upper">
                        <h1>Edit a Tour</h1>
                        <div className="editTourCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="timeOfDay">Time of Day</Label>
                                    <br></br>
                                    <Input
                                        id="timeOfDay"
                                        type="text"
                                        onChange={handleEdit}
                                        value={tour.timeOfDay}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="timeOfYear">Time Of Year</Label>
                                    <br></br>
                                    <Input
                                        id="timeOfYear"
                                        type="text"
                                        onChange={handleEdit}
                                        value={tour.timeOfYear}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label for="price">Price</Label>
                                    <br></br>
                                    <Input
                                        id="price"
                                        type="price"
                                        onChange={handleEdit}
                                        value={tour.price}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label for="peoplePerTour">People Per Tour</Label>
                                    <br></br>
                                    <Input
                                        id="peoplePerTour"
                                        type="peoplePerTour"
                                        onChange={handleEdit}
                                        value={tour.peoplePerTour}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Button>Save Changes</Button>
                                    </FormGroup>
                                </fieldset>
                            </Form>
                        </div>
                        <div className="editTourCenter_lower">
                            <button onClick={returnToManageTours}>Return To Tour List</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}