import './Dropdown.css'
import React from 'react';


function NameDropdown() {
    
    let userName = localStorage.getItem("name")
    return (
        <div className="nav-dropdown-menu">
            {userName}
        </div>
    )

}

export default NameDropdown