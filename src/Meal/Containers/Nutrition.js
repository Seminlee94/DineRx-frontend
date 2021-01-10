import React from 'react'
import NutritionCard from '../Components/NutritionCard'
import "../Meal.css"

function Nutrition(props) {

    const nutritions = () => {
        return props.nutritions.map(el => <NutritionCard key={el.id} nutrition={el} />)
    }

    return (
            <div className="nutrition-container">
                {nutritions()}
            </div>
    )
}

export default Nutrition