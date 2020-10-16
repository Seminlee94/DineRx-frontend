import './Dropdown.css'
import React from 'react';


function DietDropdown() {
    
    let userDiet = localStorage.getItem("diet")
    return (
        <div className="nav-dropdown-menu">
            {userDiet}
        </div>
    )

}

export default DietDropdown