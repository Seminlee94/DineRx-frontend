import './Dropdown.css'
import React from 'react';


function AllergyDropdown() {
    
    let userAllergy = localStorage.getItem("allergies")
    return (
        <div className="nav-dropdown-menu">
            {userAllergy}
        </div>
    )

}

export default AllergyDropdown