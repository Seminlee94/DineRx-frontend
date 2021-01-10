import React from 'react'
import "./Cart.css"
import * as faIcons from "react-icons/fa"
import { connect } from 'react-redux'
import { deleteUserFood } from '../../Redux/actions'

function RightSideItemCard(props) {

    const deleteUserFood = (id) => {
        props.deleteUserFood(id)
    }
    return(
        <div className="item-card" >
                
                <img className="meal-card-image" src={props.meal.image} alt={props.meal.name} style={{ height:"50px", width: "50px" }} />
                <div className="meal-card-name">
                    {props.meal.name}
                </div>
                <div className="meal-card-icon" onClick={() => deleteUserFood(props.userFood_id)}>
                    <faIcons.FaRegTimesCircle />
                </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
} 
        
const mapDispatchToProps = (dispatch) => {
    return { deleteUserFood: (id) => 
        dispatch(deleteUserFood(id))}
}


export default connect(mapStateToProps, mapDispatchToProps)(RightSideItemCard)