import React from 'react'
import "./Cart.css"

function CartItem(props){
    console.log(props.meal.food)
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

                <div className="incart-buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>


            </div>
        // </div>
    )


}

export default CartItem