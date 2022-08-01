import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AddRemoveOrgListItem({organization, caveOrgs, setCaveOrgs, isLoading}){
    const[isChecked, setIsChecked] = useState(false) 
    const[integerList, setIntegerList] = useState([]);
    
    useEffect(()=>{
        if (caveOrgs.filter(c => c.name === organization.name).length > 0) {
            setIsChecked(true)
        }

    },[isLoading])

    const handleChange = (e) =>{
        setIsChecked(e.target.checked)
        if(e.target.checked == true){
            let tempArray=[...caveOrgs]
            tempArray.push(organization)
            setCaveOrgs(tempArray)
        
        }
        if(e.target.checked == false){
            let tempArray = [...caveOrgs]
            let myIndex = tempArray.filter((org) => org.name != organization.name)
            setCaveOrgs(myIndex)
        }
    }

    return(
        <div className="caveListCard">
            <div className="clc_pic">
                <img src={organization.orgImage} alt={organization.name}/>
            </div>
            <div className="clc_name">
                <p>{organization.name}</p>
            </div>
            <div className="addRemoveArea">
                <input type="checkbox" id={organization.id} checked={isChecked} name={organization.name} onChange={handleChange}/>
                <label htmlFor={organization.name}></label>
            </div>
        </div>
    );
}