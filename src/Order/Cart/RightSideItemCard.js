import React from 'react'
import "./Cart.css"



function RightSideItemCard(props) {

    return(
        <div className="item-card" >

                <img className="meal-card-image" src={props.meal.image} alt={props.meal.name} style={{ height:"50px", width: "50px" }} />

                {props.meal.name}

        </div>



    )
}
        
export default RightSideItemCard