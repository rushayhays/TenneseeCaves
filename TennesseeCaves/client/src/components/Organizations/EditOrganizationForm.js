import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom";
import { getSingleOrganization, updateOrganization } from "../../modules/organizationManager";
import "../../styles/editOrg.css"

export default function EditOrganizationForm(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [organization, setOrganization] = useState({
        name:"",
        website:"",
        orgImage:""
    });

    useEffect(()=>{
        getSingleOrganization(id).then((org)=>{
            setOrganization(org)
        })
    },[])

    const handleEdit = (e) =>{
        //this will handle all text inputs
        const orgaonizationToEdit = {...organization};
        orgaonizationToEdit[e.target.id] = e.target.value;
        setOrganization(orgaonizationToEdit)
    }


    const registerClick = (e) => {
        //This needs work
        updateOrganization(organization);
    };
    const returnToManageOrganizations = () =>{
        navigate("/manageOrganizations")
    }

    return(
        <>
            <div className="editOrgMain">
                <div className="editOrgLeft">

                </div>
                <div className="editOrgCenter">
                    <div className="editOrgCenter_upper">
                        <h1>Edit an Organization</h1>
                        <div className="editOrgCenter_upper_addCave">
                            <Form onSubmit={registerClick}>
                                <fieldset>
                                    <FormGroup>
                                    <Label htmlFor="name">Organization Name</Label>
                                    <br></br>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={handleEdit}
                                        value={organization.name}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label htmlFor="website">Website Url</Label>
                                    <br></br>
                                    <Input
                                        id="website"
                                        type="text"
                                        onChange={handleEdit}
                                        value={organization.website}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Label for="orgImage">Organization Logo Url</Label>
                                    <br></br>
                                    <Input
                                        id="orgImage"
                                        type="orgImage"
                                        onChange={handleEdit}
                                        value={organization.orgImage}
                                    />
                                    </FormGroup>
                                    <br></br>
                                    <FormGroup>
                                    <Button>Save Edit</Button>
                                    </FormGroup>
                                </fieldset>
                            </Form>
                        </div>
                        <div className="editOrgCenter_lower">
                            <button onClick={returnToManageOrganizations}>Return To Manage Organizations</button>
                        </div>
                    </div>
                   
                </div>
                <div className="editOrgRight">

                </div>
            </div>

        </>
    );
}