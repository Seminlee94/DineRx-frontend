import React from 'react'
import '../Meal.css'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { addUserFood } from '../../Redux/actions'

let user_id = localStorage.getItem("userId")

class MealCard extends React.Component {

    state = {
        toggleState: false,
        mouseState: false
    }

    addUserFood() {
        this.props.addUserFood()
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

    addHandler = () => {
        console.log("this")
    }

    // viewHandler = () => {
    //     console.log("view this")
    // }
    


    render() {
        let meal_id = this.props.meal.id
        return(
    
            <div className="meal-card" >

                <div className="box">

                    <img className="meal-card-image" src={this.props.meal.image} alt={this.props.meal.name} style={{ height:"220px", width: "200px" }} onMouseOver={this.mouseOverHandler}/>
                    <div className={this.state.mouseState ? "overlay" : "overlay-inactive"} onMouseLeave={this.mouseLeaveHandler}>
                        <div className="text" >
                            {(this.props.meal.breakfast && this.props.meal.lunch===false && this.props.meal.dinner===false) ?
                            
                            <button className="breakfast-button" onClick={(event) => this.addUserFood(event)}>Add Breakfast</button>
                            :

                            null
                            }
                            {(this.props.meal.lunch && this.props.meal.dinner) ?
                            <>
                            <button className="lunch-button" onClick={this.addHandler}>Add Lunch</button>
                            <button className="dinner-button" onClick={this.addHandler}>Add Dinner</button>
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
    return { userFoods: state.userFoods }
} 

const mapDispatchToProps = (dispatch) => {
    return { addUserFood: () => dispatch(addUserFood(user_id))}
}


export default connect(mapStateToProps, mapDispatchToProps)(MealCard)
        
