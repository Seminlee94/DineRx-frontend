import React from 'react'
import '../Meal.css'

function NutritionCard(props) {

    return(
        <div className="nutrition-card">
            <div className="nutrition-card-name">
                {props.nutrition.title}:
            </div>
            <div className="nutrition-card-amount">
                {props.nutrition.amount}
            </div>

        </div>

    )
}
        
export default NutritionCard
        