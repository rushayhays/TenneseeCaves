import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { addOrganization } from "../../modules/organizationManager";
import "../../styles/createNewOrg.css"

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
            <div className="addOrgMain">
                <div className="addOrgCenter">
                    <div className="addOrgCenter_upper">
                        <h1>Create A New Organization</h1>
                        <div className="addOrgCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="name">Organization Name</Label>
                                    <br></br>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
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
                                    <Label for="orgImage">Organization Logo Url</Label>
                                    <br></br>
                                    <Input
                                        id="orgImage"
                                        type="orgImage"
                                        onChange={(e) => setOrgImage(e.target.value)}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Button>Register</Button>
                                    </FormGroup>
                                </fieldset>
                            </Form>
                        </div>
                        <div className="addOrgCenter_lower">
                            <button onClick={returnToManageOrganizations}>Return To Manage Organizations</button>
                        </div>
                    </div>
                   
                </div>

            </div>

        </>
    );
}