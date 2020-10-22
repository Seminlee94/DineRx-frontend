import React from "react";
import './home.css'
import nyc from '../asset/images/nyc.jpeg'
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom"

const moment = require("moment");


class Home extends React.Component {





    logoutHandler = () => {
        localStorage.clear()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
        localStorage.removeItem("name")
        localStorage.removeItem("diet")
        localStorage.removeItem("department")
        localStorage.removeItem("allergies")
        localStorage.removeItem("room")
        localStorage.removeItem("hospital")
        localStorage.removeItem("restriction")
        this.props.history.push('/login')
      };

    render(){
        
        let userName = localStorage.getItem("name")
        let userHospital = localStorage.getItem("hospital")

        return (

            <>
                <div className="top-welcome">
                    <img 
                        src={nyc}
                        style={{ width: "100%", height: "30vh" }}
                        alt="city-img" />
                </div>
                <div className="welcome-city">
                    New York
                </div>
                <div className="welcome-hospital">
                    Welcome to {userHospital}, {userName} 
                </div>

                <div className="order-buttons">
                    <div className="order-button-left">
                        {/* <Button 
                            variant="contained" 
                            color="primary" 
                            href="/ordernow">
                            Order Now
                        </Button> */}
                        <a href="ordernow" className="home-button">Order Now</a>
                    </div>

                    <div className="order-button-right">
                        {/* <Button 
                            variant="contained" 
                            color="primary" 
                            href="/orderahead"
                            style={{ marginLeft: "20" }}>
                            Order Ahead
                        </Button> */}
                        <a href="/orderahead" className="home-button">Order Ahead</a>
                    </div>
                </div>

                <div className="welcome-bottom">
                    Not you or Room number? <button onClick={this.logoutHandler} className="home-signout-button">Sign Out</button> and contact your nurse!
                    {/* <Button onClick={this.logoutHandler} variant="contained" color="secondary" size="small">Sign Out</Button> and contact your nurse! */}
                </div>

            </>
        )
    }
}


export default withRouter(Home)