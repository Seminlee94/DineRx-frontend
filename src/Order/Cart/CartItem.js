import React from 'react'
import "./Cart.css"
import { Link } from "react-router-dom"

function CartItem(props){
    let filteredCalories = props.meal.food.nutritions.filter(obj => obj.title === "Calories")
    console.log(filteredCalories[0].title, filteredCalories[0].amount)
    let meal_id = props.meal.food_id
    return (
        // <div className="cart-meal-container">
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

                <div className="incart-meal-calories">
                    {filteredCalories[0].amount} {filteredCalories[0].title}
                </div>



                <div className="incart-buttons">
                    <Link to={{ pathname: `product/${meal_id}` }}>
                        <button onClick={() => props.viewHandler(meal_id)}>Edit</button>
                    </Link>
                    <button>Delete</button>
                </div>


            </div>
        // </div>
    )


}

export default CartItem