import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { addCave } from "../../modules/caveManager";

export default function AddCaveForm(){
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [accessId, setAccessId] = useState();
    const [website, setWebsite] = useState();
    const [location, setLocation] = useState();
    const [about, setAbout] = useState();
    const [bannerImageUrl, setBannerImageUrl] = useState();


    const registerClick = (e) => {
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
        console.log(cave)
        //This needs work
        addCave(cave).then(() => {navigate("/manageCaves")});
    };
    const returnToManageCaves = () =>{
        navigate("/manageCaves")
    }

    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Create A New Cave</h1>
                        <div className="mCaveCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="name">Cave Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="accessId">Access Level</Label>
                                    <Input
                                        id="accessId"
                                        type="text"
                                        onChange={(e) => setAccessId(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="website">Website Url</Label>
                                    <Input
                                        id="website"
                                        type="text"
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input
                                        id="location"
                                        type="text"
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor="about">Short Description</Label>
                                    <Input
                                        id="about"
                                        type="text"
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="bannerImageUrl">BannerImageUrl</Label>
                                    <Input
                                        id="bannerImageUrl"
                                        type="bannerImageUrl"
                                        onChange={(e) => setBannerImageUrl(e.target.value)}
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
                        <button onClick={returnToManageCaves}>Return To Manage Caves</button>
                        <div className="mCaveCenter_lower_caveList">
                            <p>caveTable wuz here</p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}