import React from 'react'
import { connect } from 'react-redux'
import { getIngredient } from '../../Redux/actions'
import IngredientCard from '../Components/IngredientCard'
import Shelf from '../Shelf/Shelf'
import "../Meal.css"

let meal_id = window.location.href.split("/").splice(-1)[0]

class Ingredient extends React.Component{


    componentDidMount(){
        this.props.fetchMeals()
    }

    ingredients = () => {
        return this.props.ingredients.map(el => <IngredientCard key={el.id} ingredient={el} />)
    }


    
    
    
    
    render(){
        
        return (
            <Shelf ingredients={this.ingredients()} />
        )
    }

}

const mapStateToProps = (state) => {
    return { ingredients: state.ingredients }
} 


const mapDispatchToProps = (dispatch) => {
    return { fetchMeals: () => dispatch(getIngredient(meal_id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient)
