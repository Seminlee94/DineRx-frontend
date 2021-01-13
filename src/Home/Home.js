import React from "react";
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
                    className="welcome__top--img"
                    src={nyc}
                    style={{ width: "100%", height: "30vh" }}
                    alt="city-img" />

                <div className="welcome__top__city">
                    <p>New York</p>
                </div>

            </div>

            <div className="welcome__hospital">
                {/* Welcome to {userHospital}, {userName}  */}
                <p>Welcome to New York Hospital</p>
            </div>

            <div className="welcome__buttons">
                <a href="/ordernow"
                    className="welcome__buttons__order">
                    Order Now
                </a>

                <a href="/orderahead"
                    className="welcome__buttons__order">
                    Order Ahead
                </a>
            </div>

            <div className="welcome__bottom">
                <h3>Not you or Room number?</h3> 
                <button onClick={logoutHandler}            
                    className="welcome__signout">
                    Sign Out
                </button>
            </div>
        </div>
    )
}



export default withRouter(Home)