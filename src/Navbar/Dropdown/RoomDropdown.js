import React from 'react';
import './Dropdown.css'

function RoomDropdown() {
   
    let userRoom = localStorage.getItem("room")
    let userDepartment = localStorage.getItem("department")

    return (
        <div className="nav-dropdown-menu">
            {userDepartment}/{userRoom}
        </div>
    )

}

export default RoomDropdown