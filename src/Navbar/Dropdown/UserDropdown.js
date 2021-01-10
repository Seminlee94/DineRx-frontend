import React, { useState } from 'react';
import './Dropdown.css'

function UserDropdown(props) {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const logoutHandler = () => {
        localStorage.clear()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
        localStorage.removeItem("name")
        localStorage.removeItem("diet")
        localStorage.removeItem("allergies")
        localStorage.removeItem("room")
        localStorage.removeItem("hospital")
        localStorage.removeItem("restriction")
        localStorage.removeItem("department")
        props.history.push('/login')
      };


    return (
        <div onClick={()=>handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>

            <div className="dropdown-item">
                <a className="dropdown-list" href="/diet" onClick={()=>handleClick}>About my Diet</a>
            </div>
            <div className="dropdown-item">
                <a className="dropdown-list" href="/cart" onClick={()=>handleClick}>My Cart</a>
            </div>
            <div className="dropdown-item">
                <a className="dropdown-list" href="/myorders" onClick={()=>handleClick}>My Orders</a>
            </div>
            <div className="dropdown-item">
                <a className="dropdown-list" href="/previousorders" onClick={()=>handleClick}>Previous Orders</a>
            </div>
            <div className="dropdown-item">
                <a className="dropdown-list" href="/login" onClick={logoutHandler}>Sign Out</a>
            </div>
        </div>
    )
}



export default UserDropdown