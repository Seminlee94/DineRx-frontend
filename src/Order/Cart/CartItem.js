import React from 'react'
import "./Cart.css"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { deleteUserFood } from '../../Redux/actions'
import Button from '@material-ui/core/Button';

function CartItem(props) {

    const deleteUserFood = (id) => {
        props.deleteUserFood(id)
    }

    let filteredCalories = props.meal.food.nutritions.filter(obj => obj.title === "Calories")
    let meal_id = props.meal.food_id

    return (

        <div className="incart-meal-card">

            <div className="incart-image-container">
                <img 
                    src={props.meal.food.image} 
                    alt="meal-picture" 
                    className="incart-image" 
                />
            </div>

            <div className="incart-meal-name">
                {props.meal.food.name}
            </div>

            <div className="incart-meal-card-calories">
                {filteredCalories[0].amount} {filteredCalories[0].title}
            </div>

            <Link to={{ pathname: `product/${meal_id}` }} className="cart-href">
                <Button
                    type="submit"
                    variant="outlined" 
                    style={{ marginLeft: "65px" }}
                    onClick={() => props.viewHandler(meal_id)}>
                    View
                </Button>

            </Link>


            <Button
                type="submit"
                variant="outlined" 
                color="secondary" 
                onClick={() => deleteUserFood(props.meal.id)}>
                Remove
            </Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return { deleteUserFood: (id) => 
        dispatch(deleteUserFood(id))}
}

export default connect(null, mapDispatchToProps)(CartItem)