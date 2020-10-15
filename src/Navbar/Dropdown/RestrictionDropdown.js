import React from 'react';
import './Dropdown.css'

function RestrictionDropdown() {
   
    let userRestriction = localStorage.getItem("restriction")

    return (
        <div className="nav-dropdown-menu">
            {userRestriction}
        </div>
    )

}

export default RestrictionDropdown