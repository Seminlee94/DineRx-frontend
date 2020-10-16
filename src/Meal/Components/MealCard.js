import React from 'react'
import '../Meal.css'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { addUserFood } from '../../Redux/actions'

let user_id = localStorage.getItem("userId")

class MealCard extends React.Component {

    state = {
        toggleState: false,
        mouseState: false,
    }

    addUserFood(meal_id, meal_type) {
        let userFoodObj = {food_id: parseInt(meal_id), user_id: parseInt(user_id), meal_types: meal_type, meal_schedule: "order_ahead" }
        this.props.addUserFood(userFoodObj)
    }

    toggle = () => {
        this.setState({ toggleState: !this.state.toggleState })
    }

    mouseOverHandler = () => {
        this.setState({ mouseState: true })
    }

    mouseLeaveHandler = () => {
        this.setState({ mouseState: false })
    }

    render() {
        let meal_id = this.props.meal.id
        // console.log(meal_id, user_id)
        return(
    
            <div className="meal-card" >

                <div className="box">

                    <img className="meal-card-image" src={this.props.meal.image} alt={this.props.meal.name} style={{ height:"220px", width: "200px" }} onMouseOver={this.mouseOverHandler}/>
                    <div className={this.state.mouseState ? "overlay" : "overlay-inactive"} onMouseLeave={this.mouseLeaveHandler}>
                        <div className="text" >
                            {(this.props.meal.breakfast && this.props.meal.lunch===false && this.props.meal.dinner===false) ?
                            
                            <button className="breakfast-button" onClick={() => this.addUserFood(meal_id, "breakfast")}>Add Breakfast</button>
                            :

                            null
                            }
                            {(this.props.meal.lunch && this.props.meal.dinner) ?
                            <>
                            <button className="lunch-button" onClick={() => this.addUserFood(meal_id, "lunch")}>Add Lunch</button>
                            <button className="dinner-button" onClick={() => this.addUserFood(meal_id, "dinner")}>Add Dinner</button>
                            </>
                            :
                            null
                            }
                            <Link to={{ pathname: `product/${meal_id}`,
                                state: { id: meal_id }
                            }} >
                            <button className="view-button" onClick={() => this.props.viewHandler(meal_id)}>View Detail</button>
                                </Link>    
                        </div>
                    </div>
                </div>


            
                <div className="meal-card-container">
                    <div className="meal-card-name">
                        {this.props.meal.name}
                    </div>
                </div>

            </div>
    
    
    
        )
    }

}
        
const mapStateToProps = (state) => {
    // console.log(state.userFoods)
    return { userFoods: state.userFoods }
} 

const mapDispatchToProps = (dispatch) => {
    return { addUserFood: (userFoodObj) => 
        dispatch(addUserFood(userFoodObj))}
}


export default connect(mapStateToProps, mapDispatchToProps)(MealCard)
        
