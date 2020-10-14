import React from 'react'
import NutritionCard from '../Components/NutritionCard'
import "../Meal.css"

class Nutrition extends React.Component{


    nutritions = () => {
        return this.props.nutritions.map(el => <NutritionCard key={el.id} nutrition={el} />)
    }


    
    
    
    
    render(){
        return (
                <div className="nutrition-container">
                    {this.nutritions()}
                </div>
        )
    }

}


export default Nutrition