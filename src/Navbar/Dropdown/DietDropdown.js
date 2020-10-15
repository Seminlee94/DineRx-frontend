import './Dropdown.css'
import React from 'react';


function DietDropdown() {
    
    let userDiet = localStorage.getItem("diet")
    console.log(userDiet)
    return (
        <div className="nav-dropdown-menu">
            {userDiet}
        </div>
    )

}

export default DietDropdown