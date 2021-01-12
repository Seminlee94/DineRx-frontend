import React from "react";
import { Link } from "react-router-dom"
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
                Welcome to New York Hospital
            </div>

            <div className="welcome__buttons">
                <Link to={{pathname: 'ordernow'}} >
                    <button className="welcome__buttons__order">
                        Order Now
                    </button>
                </Link>

                <Link to={{pathname: 'orderahead'}} >
                    <button className="welcome__buttons__order">
                        Order Ahead
                    </button>
                </Link>
            </div>

            <div className="welcome__bottom">
                Not you or Room number? <button onClick={logoutHandler} className="welcome__signout">Sign Out</button> and contact your nurse!
            </div>
        </div>
    )
}



export default withRouter(Home)