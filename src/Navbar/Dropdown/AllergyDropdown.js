import './Dropdown.css'
import React from 'react';


function AllergyDropdown() {
    
    let userAllergy = localStorage.getItem("allergies")
    console.log(userAllergy)
    return (
        <div className="nav-dropdown-menu">
            {userAllergy}
        </div>
    )

}

export default AllergyDropdown