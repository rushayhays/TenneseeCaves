import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { addCave } from "../../modules/caveManager";
import "../../styles/addEditCaveForm.css"

export default function AddCaveForm(){
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [accessId, setAccessId] = useState();
    const [website, setWebsite] = useState();
    const [location, setLocation] = useState();
    const [about, setAbout] = useState();
    const [bannerImageUrl, setBannerImageUrl] = useState();


    const registerClick = (e) => {
        e.preventDefault();
        //generate a dateAdded
        var dateAdded = new Date().toISOString().slice(0, 10);
        const cave = {
        name,
        accessId,
        website,
        location,
        about,
        dateAdded,
        bannerImageUrl
        };
        addCave(cave).then(() =>{
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
                        <h1>Create A New Cave</h1>
                        <div className="addEditCaveCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="name">Cave Name</Label>
                                    <br></br>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="accessId">Access Level</Label>
                                    <br></br>
                                    <Input
                                        id="accessId"
                                        type="text"
                                        onChange={(e) => setAccessId(e.target.value)}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="website">Website Url</Label>
                                    <br></br>
                                    <Input
                                        id="website"
                                        type="text"
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label for="location">Location</Label>
                                    <br></br>
                                    <Input
                                        id="location"
                                        type="text"
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="about">Short Description</Label>
                                    <br></br>
                                    <Input
                                        id="about"
                                        type="text"
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label for="bannerImageUrl">BannerImageUrl</Label>
                                    <br></br>
                                    <Input
                                        id="bannerImageUrl"
                                        type="bannerImageUrl"
                                        onChange={(e) => setBannerImageUrl(e.target.value)}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Button>Create Cave</Button>
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