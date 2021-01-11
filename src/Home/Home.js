import React from "react";
// import './home.css'
import nyc from '../asset/images/nyc.jpeg'
import { withRouter } from "react-router-dom"
import './Styles.scss'

// class Home extends React.Component {
function Home(props) {

    const logoutHandler = () => {
        localStorage.clear()
        // eslint-disable-next-line react/prop-types
        props.history.push('/login')
    };
        
    // let userName = localStorage.getItem("name")
    // let userHospital = localStorage.getItem("hospital")

    return (

        <div className="welcome">
            <div className="welcome__top">
                <img 
                    src={nyc}
                    style={{ width: "100%", height: "30vh" }}
                    alt="city-img" />
            </div>
            <div className="welcome__city">
                New York
            </div>
            <div className="welcome__hospital">
                {/* Welcome to {userHospital}, {userName}  */}
                Welcome to New York Hospital
            </div>

            <div className="order-buttons">
                <div className="order-buttons__left">
                    <a href="ordernow">Order Now</a>
                </div>

                <div className="order-buttons__right">
                    <a href="/orderahead">Order Ahead</a>
                </div>
            </div>

            <div className="welcome__bottom">
                Not you or Room number? <button onClick={logoutHandler} className="home-signout-button">Sign Out</button> and contact your nurse!
            </div>
        </div>
    )
}



export default withRouter(Home)