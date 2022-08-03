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
        e.preventDefault();
        updateCave(cave).then(()=>{
            returnToManageCaves();
        });
    };
    const returnToManageCaves = () =>{
        navigate("/manageCaves")
    }

    return(
        <>
            <div className="addEditCaveMain">
                <div className="addEditCaveCenter">
                    <div className="addEditCaveCenter_upper">
                        <h1>Edit a Cave</h1>
                        <div className="addEditCaveCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="name">Cave Name</Label>
                                    <br></br>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.name}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="accessId" value={cave.accessId} >Access Level</Label>
                                    <br></br>
                                    <select onChange={handleEdit}>
                                        <option id="accessId" value="1">Public</option>
                                        <option id="accessId" value="2">Restricted</option>
                                        <option id="accessId" value="3">Private</option>
                                    </select>
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="website">Website Url</Label>
                                    <br></br>
                                    <Input
                                        id="website"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.website}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="location">Location</Label>
                                    <br></br>
                                    <Input
                                        id="location"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.location}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="about">About</Label>
                                    <br></br>
                                    <Input
                                        id="about"
                                        type="text"
                                        onChange={handleEdit}
                                        value={cave.about}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label for="bannerImageUrl">Url for Cave Banner Image</Label>
                                    <br></br>
                                    <Input
                                        id="bannerImageUrl"
                                        type="bannerImageUrl"
                                        onChange={handleEdit}
                                        value={cave.bannerImageUrl}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Button>Edit Cave</Button>
                                    </FormGroup>
                                </fieldset>
                            </Form>
                        </div>
                        <div className="addEditCaveCenter_lower">
                            <button onClick={returnToManageCaves}>Return To Manage Caves</button>
                        </div>
                    </div>
                   
                </div>

            </div>

        </>
    );
}