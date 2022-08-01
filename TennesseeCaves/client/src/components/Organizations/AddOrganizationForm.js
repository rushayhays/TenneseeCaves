import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { addOrganization } from "../../modules/organizationManager";

export default function AddOrganizationForm(){
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [website, setWebsite] = useState();
    const [orgImage, setOrgImage] = useState();


    const registerClick = (e) => {
        
        const organization = {
        name,
        website,
        orgImage
        };
        //This needs work
        addOrganization(organization);
    };
    const returnToManageOrganizations = () =>{
        navigate("/manageOrganizations")
    }

    return(
        <>
            <div className="mCaveMain">
                <div className="mCaveCenter">
                    <div className="mCaveCenter_upper">
                        <h1>Create A New Organization</h1>
                        <div className="mCaveCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="name">Organization Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
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
                                    <Label for="orgImage">Organization Logo Url</Label>
                                    <Input
                                        id="orgImage"
                                        type="orgImage"
                                        onChange={(e) => setOrgImage(e.target.value)}
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
                        <button onClick={returnToManageOrganizations}>Return To Manage Organizations</button>
                        <div className="mCaveCenter_lower_caveList">
                            <p>caveTable wuz here</p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
}