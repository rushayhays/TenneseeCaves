import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { addTour } from "../../modules/tourManager.js"

export default function AddTourForm({cave}){
    const navigate = useNavigate();

    
    const [timeOfDay, setTimeOfDay] = useState();
    const [timeOfYear, setTimeOfYear] = useState();
    const [price, setPrice] = useState();
    const [peoplePerTour, setPeoplePerTour] = useState();


    const registerClick = (e) => {
        const priceAsADecimal = Number(price)
        const peoplePerTourAsInt = Number(peoplePerTour)
        const theCaveId = cave.id
        const tour = {
        theCaveId,
        timeOfDay,
        timeOfYear,
        priceAsADecimal,
        peoplePerTourAsInt
        };
        //This needs work
        addTour(tour);
    };
    const returnToManageOrganizations = () =>{
        navigate("/manageCaves")
    }

    return(
        <>
            <div className="addTourMain">
                <div className="addTourCenter">
                    <div className="addTourCenter_upper">
                        <h3>Create A New Tour</h3>
                        <div className="addTourCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="timeOfDay">Time Of Day</Label>
                                    <Input
                                        id="timeOfDay"
                                        type="text"
                                        onChange={(e) => setTimeOfDay(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="timeOfYear">Time Of Year</Label>
                                    <Input
                                        id="timeOfYear"
                                        type="text"
                                        onChange={(e) => setTimeOfYear(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input
                                        id="price"
                                        type="text"
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="peoplePerTour">People Per Tour</Label>
                                    <Input
                                        id="peoplePerTour"
                                        type="text"
                                        onChange={(e) => setPeoplePerTour(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Button>Register</Button>
                                    </FormGroup>
                                </fieldset>
                            </Form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}