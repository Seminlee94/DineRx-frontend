import React from 'react';
import './Dropdown.css'

function RoomDropdown() {
   
    // let userHospital = localStorage.getItem("hospital")
    let userRoom = localStorage.getItem("room")

    return (
        <div className="nav-dropdown-menu">
            {userRoom}
        </div>
    )

}

export default RoomDropdown