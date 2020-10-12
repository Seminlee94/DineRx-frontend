import React from 'react'
import '../Meal.css'

class NutritionCard extends React.Component {

    render() {
        return(
            <div className="nutrition-card">
                <div className="nutrition-card-name">
                    {this.props.nutrition.title}:
                </div>
                <div className="nutrition-card-amount">
                    {this.props.nutrition.amount}
                </div>

            </div>

        )
    }
        
}
        
export default NutritionCard
        