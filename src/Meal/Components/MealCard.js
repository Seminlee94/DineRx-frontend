import React, { useState } from 'react'
import '../Meal.css'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { addUserFood } from '../../Redux/actions'

let user_id = localStorage.getItem("userId")

function MealCard(props) {

    // const [toggleState, setToggleState] = useState(false)
    const [mouseState, setMouseState] = useState(false)

    const addUserFood = (meal_id, meal_type) => {
        let userFoodObj = {food_id: parseInt(meal_id), user_id: parseInt(user_id), meal_types: meal_type, meal_schedule: "order_ahead" }
        props.addUserFood(userFoodObj)
    }

    // const toggle = () => {
    //     setToggleState(!toggleState)
    // }

    const mouseOverHandler = () => {
        setMouseState(true)
    }

    const mouseLeaveHandler = () => {
        setMouseState(false)
    }

    let meal_id = props.meal.id

    return(

        <div className="meal-card" >

            <div className="box">

                <img className="meal-card-image" src={props.meal.image} alt={props.meal.name} style={{ height:"220px", width: "200px" }} onMouseOver={mouseOverHandler}/>
                <div className={mouseState ? "overlay" : "overlay-inactive"} onMouseLeave={mouseLeaveHandler}>
                    <div className="text" >

                        {(props.meal.breakfast && props.meal.lunch===false && props.meal.dinner===false) ?
                            <button className="breakfast-button" onClick={() => addUserFood(meal_id, "breakfast")}>Add Breakfast</button>
                        :

                            null
                        }
                            {(props.meal.lunch && props.meal.dinner) ?
                            <>
                                <button className="lunch-button" onClick={() => addUserFood(meal_id, "lunch")}>Add Lunch</button>
                                <button className="dinner-button" onClick={() => addUserFood(meal_id, "dinner")}>Add Dinner</button>
                            </>
                        :
                        null
                        }


                        <Link to={{ pathname: `product/${meal_id}`,
                            state: { id: meal_id }
                        }} >
                            <button className="view-button" onClick={() => props.viewHandler(meal_id)}>View Detail</button>
                        </Link>    
                    </div>
                </div>
            </div>
        
            <div className="meal-card-container">
                <div className="meal-card-name">
                    {props.meal.name}
                </div>
            </div>

        </div>
    )
}


        
const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
} 

const mapDispatchToProps = (dispatch) => {
    return { addUserFood: (userFoodObj) => 
        dispatch(addUserFood(userFoodObj))}
}


export default connect(mapStateToProps, mapDispatchToProps)(MealCard)
        
