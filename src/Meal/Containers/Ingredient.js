import React from 'react'
import IngredientCard from '../Components/IngredientCard'
import Shelf from '../Shelf/Shelf'
import "../Meal.css"

function Ingredient(props) {

    const ingredients = () => {
        return props.ingredients.map(el => <IngredientCard key={el.id} ingredient={el} />)
    }

    return (
        
        <div>
            {props.ingredients ?
            
                <Shelf ingredients={ingredients()} />

                :

                null
            }
        </div>

    )
}



export default Ingredient
