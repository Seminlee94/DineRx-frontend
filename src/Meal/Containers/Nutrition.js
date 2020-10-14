import React from 'react'
import { connect } from 'react-redux'
import { getNutrition } from '../../Redux/actions'
import NutritionCard from '../Components/NutritionCard'
import "../Meal.css"

// let meal_id = window.location.href.split("/").splice(-1)[0]

class Nutrition extends React.Component{


    // componentDidMount(){
    //     this.props.fetchMeals()
    // }

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

// const mapStateToProps = (state) => {
//     return { nutritions: state.nutritions }
// } 


// const mapDispatchToProps = (dispatch) => {
//     return { fetchMeals: () => dispatch(getNutrition(meal_id))}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Nutrition)
export default Nutrition