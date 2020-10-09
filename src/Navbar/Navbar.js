import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import * as faIcons from "react-icons/fa"
import UserDropdown from './Dropdown/UserDropdown'
import RoomDropdown from './Dropdown/RoomDropdown'
import AllergyDropdown from './Dropdown/AllergyDropdown'
import 'rsuite/lib/styles/index.less'




function Navbar() {

  // const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [roomDropdown, setroomDropdown] = useState(false);
  const [allergyDropdown, setallergyDropdown] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 600) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 600) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const roomDropdownEnter = () => {
    if (window.innerWidth < 600) {
      setroomDropdown(false);
    } else {
      setroomDropdown(true);
    }
  }

  const roomDropdownLeave = () => {
    if (window.innerWidth < 600) {
      setroomDropdown(false);
    } else {
      setroomDropdown(false);
    }
  }

  const allergyDropdownEnter = () => {
    if (window.innerWidth < 600) {
      setallergyDropdown(false);
    } else {
      setallergyDropdown(true);
    }
  }

  const allergyDropdownLeave = () => {
    if (window.innerWidth < 600) {
      setallergyDropdown(false);
    } else {
      setallergyDropdown(false);
    }
  }
  
  let userName = localStorage.getItem("name")
  // let userDiet = localStorage.getItem("Regu")
  // let userAllergy = localStorage.getItem("allergy")


  return (
    <nav className="navbarItems">

      <Link className="navbarLogo" to="/">DineRx</Link>

      {/* <div className={state.clicked ? "nav-menu active" : "nav-menu"}> */}
      <div className="nav-menu">
        <li className="navbar-box">{userName}</li>
        <li className="navbar-box">Regular</li>
        <li className="navbar-box" onMouseEnter={allergyDropdownEnter} onMouseLeave={allergyDropdownLeave}>Allergy{allergyDropdown ? <AllergyDropdown /> : null }</li>
        <li className="navbar-box" onMouseEnter={roomDropdownEnter} onMouseLeave={roomDropdownLeave}>Room{roomDropdown ? <RoomDropdown /> : null }</li>
      </div>


      <li 
        className="menu-icon" 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}
      >
          <faIcons.FaRegUser />{dropdown ? <UserDropdown/> : null }
      </li>


    </nav>
  );

}

export default Navbar;