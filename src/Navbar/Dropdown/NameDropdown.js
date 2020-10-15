import './Dropdown.css'
import React from 'react';


function NameDropdown() {
    
    let userName = localStorage.getItem("name")
    console.log(userName)
    return (
        <div className="nav-dropdown-menu">
            {userName}
        </div>
    )

}

export default NameDropdown