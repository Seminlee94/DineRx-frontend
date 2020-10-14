import React from 'react'
import "./Cart.css"
import * as faIcons from "react-icons/fa"



class RightSideItemCard extends React.Component {


    render() {

        return(
            <div className="item-card" >
    
                    <img className="meal-card-image" src={this.props.meal.image} alt={this.props.meal.name} style={{ height:"50px", width: "50px" }} />
                    <div className="meal-card-name">
                        {this.props.meal.name}
                    </div>
                    <div className="meal-card-icon">
                        <faIcons.FaRegTimesCircle />
                    </div>
    
            </div>
    
    
    
        )
    }
}
        
export default RightSideItemCard