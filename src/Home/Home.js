import React from "react";
import './home.css'
import nyc from '../asset/images/nyc.jpeg'
import { withRouter } from "react-router-dom"

// class Home extends React.Component {
function Home(props) {

    const logoutHandler = () => {
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
        // eslint-disable-next-line react/prop-types
        props.history.push('/login')
    };
        
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
                    <a href="ordernow" className="home-button">Order Now</a>
                </div>

                <div className="order-button-right">
                    <a href="/orderahead" className="home-button">Order Ahead</a>
                </div>
            </div>

            <div className="welcome-bottom">
                Not you or Room number? <button onClick={logoutHandler} className="home-signout-button">Sign Out</button> and contact your nurse!
            </div>
        </>
    )
}



export default withRouter(Home)