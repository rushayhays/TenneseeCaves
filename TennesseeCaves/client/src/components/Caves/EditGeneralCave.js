import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCaveById, updateCave } from "../../modules/caveManager";

export default function EditGeneralCave(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [cave, setCave] = useState(
        {
            id: 0,
            name:"",
            accessId:0,
            website:"",
            location:"",
            about:"",
            dateAdded:"",
            bannerImageUrl:""

        }
    );

    useEffect(()=>{
        getSingleCaveById(id).then((cave)=>{
            setCave(cave)
        })
    },[])

    const handleEdit = (e) =>{
        //this will handle all text inputs
        const caveToEdit = {...cave};
        caveToEdit[e.target.id] = e.target.value;
        setCave(caveToEdit)
    }


    const registerClick = (e) => {
        //This needs work
        updateCave(cave);
    };
    const returnToManageCaves = () =>{
        navigate("/manageCaves")
    }

    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Edit a Cave</h1>
                        <div className="mCaveCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="name">Cave Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.name}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="accessId" value={cave.accessId} >Access Level</Label>
                                    <select onChange={handleEdit}>
                                        <option id="accessId" value="1">Public</option>
                                        <option id="accessId" value="2">Restricted</option>
                                        <option id="accessId" value="3">Private</option>
                                    </select>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="website">Website Url</Label>
                                    <Input
                                        id="website"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.website}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.location}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="about">About</Label>
                                    <Input
                                        id="about"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.about}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="bannerImageUrl">Url for Cave Banner Image</Label>
                                    <Input
                                        id="bannerImageUrl"
                                        type="bannerImageUrl"
                                        onChange={handleEdit}
                                        value={cave.bannerImageUrl}
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
                        <button onClick={returnToManageCaves}>Return To Manage Organizations</button>
                        <div className="mCaveCenter_lower_caveList">
                            <p>caveTable wuz here</p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}