import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

function UserDropdown() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <>
            <div onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                <Link className="dropdown-list" to="/diet" onClick={()=>setClick(false)}>About my Diet</Link>
            </div>
        </>
    )

}

export default UserDropdown