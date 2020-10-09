import React from 'react';
import './Dropdown.css'

class UserDropdown extends React.Component {

    state = {
        click: false
    }

    handleClick = () => {
        this.setState=({ click: !this.state.click })
    }

    logoutHandler = () => {
        localStorage.clear()
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("name")
        localStorage.removeItem("diet")
        localStorage.removeItem("allergy")
        // localStorage.removeItem("hospital")
        this.props.history.push('/login')
      };

    render(){

        return (
            <>

                    <div onClick={()=>this.handleClick} className={this.state.click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                    {/* <div onClick={()=>this.handleClick} className= 'dropdown-menu' > */}
                        <div className="dropdown-item">
                            <a className="dropdown-list" href="/diet" onClick={()=>this.handleClick}>About my Diet</a>
                        </div>
                        <div className="dropdown-item">
                            <a className="dropdown-list" href="/previousorders" onClick={()=>this.handleClick}>Previous Orders</a>
                        </div>
                        <div className="dropdown-item">
                            <a className="dropdown-list" href="/login" onClick={this.logoutHandler}>Sign Out</a>
                        </div>
                    </div>
            </>
        )
    }


}

export default UserDropdown