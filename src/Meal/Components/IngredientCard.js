import React from 'react'
import '../Meal.css'

function IngredientCard(props) {

    return(
        <div className="ingredient-card" >
                <div className="ingredient-card-image">
                <img 
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${props.ingredient.image}`}
                    alt="ingredient-pic"
                />
                </div>
    
            <div className="ingredient-card-name">
                {props.ingredient.name}
            </div>
            <div className="ingredient-card-amount">
                {props.ingredient.amount}
            </div>
        </div>
    
    
    )
}
        
        
export default IngredientCard
        