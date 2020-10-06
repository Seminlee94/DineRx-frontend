import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import * as faIcons from "react-icons/fa"
import UserDropdown from './UserDropdown'


function Navbar() {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
  
  let userName = localStorage.getItem("name")
  // let userDiet = localStorage.getItem("Regu")
  let userAllergy = localStorage.getItem("allergy")

  return (
    <nav className="NavbarItems">

      <Link className="NavbarLogo" to="/">DineRx</Link>

      {/* <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}> */}
      <div className="nav-menu">
        <li className="navbar-box">{userName}</li>
        <li className="navbar-box">Regular</li>
        <li className="navbar-box">Allergy</li>
        <li className="navbar-box">Room</li>
      </div>

      <li 
        className="menu-icon" 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}
      >
          <faIcons.FaRegUser/>{dropdown ? <UserDropdown/> : null }
      </li>

    </nav>
  );

}

export default Navbar;