import React from 'react'
import '../Meal.css'

class IngredientCard extends React.Component {

    render() {

        return(
            <div className="ingredient-card" >
                 <div className="ingredient-card-image">
                    <img 
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${this.props.ingredient.image}`}
                        alt="ingredient-pic"
                    />
                 </div>
        
                <div className="ingredient-card-name">
                    {this.props.ingredient.name}
                </div>
                <div className="ingredient-card-amount">
                    {this.props.ingredient.amount}
                </div>
            </div>
        
        
        )
    }
        
}
        
export default IngredientCard
        