import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import * as faIcons from "react-icons/fa"
import UserDropdown from './Dropdown/UserDropdown'
import RoomDropdown from './Dropdown/RoomDropdown'
import AllergyDropdown from './Dropdown/AllergyDropdown'
import RestrictionDropdown from './Dropdown/RestrictionDropdown'
import DietDropdown from './Dropdown/DietDropdown'
import NameDropdown from './Dropdown/NameDropdown'
import 'rsuite/lib/styles/index.less'




function Navbar() {

  const [dropdown, setDropdown] = useState(false);
  const [roomDropdown, setroomDropdown] = useState(false);
  const [allergyDropdown, setallergyDropdown] = useState(false);
  const [restrictionDropdown, setrestrictionDropdown] = useState(false);
  const [dietDropdown, setdietDropdown] = useState(false);
  const [nameDropdown, setnameDropdown] = useState(false);



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

  const restrictionDropdownEnter = () => {
    if (window.innerWidth < 600) {
      setrestrictionDropdown(false);
    } else {
      setrestrictionDropdown(true);
    }
  }

  const restrictionDropdownLeave = () => {
    if (window.innerWidth < 600) {
      setrestrictionDropdown(false);
    } else {
      setrestrictionDropdown(false);
    }
  }

  const dietDropdownEnter = () => {
    if (window.innerWidth < 600) {
      setdietDropdown(false);
    } else {
      setdietDropdown(true);
    }
  }

  const dietDropdownLeave = () => {
    if (window.innerWidth < 600) {
      setdietDropdown(false);
    } else {
      setdietDropdown(false);
    }
  }
  const nameDropdownEnter = () => {
    if (window.innerWidth < 600) {
      setnameDropdown(false);
    } else {
      setnameDropdown(true);
    }
  }

  const nameDropdownLeave = () => {
    if (window.innerWidth < 600) {
      setnameDropdown(false);
    } else {
      setnameDropdown(false);
    }
  }
  
  return (
    <nav className="navbarItems">

      <Link className="navbarLogo" to="/">DineRx</Link>

      <div className="nav-menu">

        <li className="navbar-box" onMouseEnter={nameDropdownEnter} onMouseLeave={nameDropdownLeave}>Name{nameDropdown ? <NameDropdown /> : null }</li>
        <li className="navbar-box" onMouseEnter={dietDropdownEnter} onMouseLeave={dietDropdownLeave}>Diet{dietDropdown ? <DietDropdown /> : null }</li>
        <li className="navbar-box" onMouseEnter={allergyDropdownEnter} onMouseLeave={allergyDropdownLeave}>Allergy{allergyDropdown ? <AllergyDropdown /> : null }</li>
        <li className="navbar-box" onMouseEnter={roomDropdownEnter} onMouseLeave={roomDropdownLeave}>Room{roomDropdown ? <RoomDropdown /> : null }</li>
        <li className="navbar-box" onMouseEnter={restrictionDropdownEnter} onMouseLeave={restrictionDropdownLeave}>Restrictions{restrictionDropdown ? <RestrictionDropdown /> : null }</li>
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