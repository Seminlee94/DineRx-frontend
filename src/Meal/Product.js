import React from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../Redux/actions'
import Ingredient from "./Containers/Ingredient"
import Nutrition from "./Containers/Nutrition"
import "./Meal.css"
import * as faIcons from "react-icons/io"


let meal_id = window.location.href.split("/").splice(-1)[0]

class Product extends React.Component {

    state = {
        clicked: false,
    }

    componentDidMount(){
        this.props.fetchMeals()
    }

    clickHandler = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        return (
            <div className="product-container">
                <div className="product-container-card">
                    <div className="product-image-container">
                        <img 
                            src={this.props.meals.image} 
                            className="product-image"
                            alt={this.props.meals.name}
                        />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {this.props.meals.name}
                        </div>
                        <div className="product-description">
                            {this.props.meals.description}
                        </div>

                    </div>
                </div>
                <div className="product-ingredient-container">
                    <div className="product-ingredient-top">
                        Ingredients in {this.props.meals.name}
                    </div>

                    <Ingredient />
                </div>

                <div className="product-nutrition-container">
                    <div className="product-blank"/>

                    <div className="product-nutrition-top">
                        Nutrition Information
                    </div>
                    <div className="view-summary-container" onClick={this.clickHandler}>
                        <div className="view-summary">
                            View Nutrition Summary
                        </div>
                        <div className="view-summary-icon">
                            {this.state.clicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                        </div>
                    </div>
                        <div className="product-nutrition-details">
                            {this.state.clicked ? <Nutrition /> : null }
                        </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { meals: state.meals }
} 


const mapDispatchToProps = (dispatch) => {
    return { fetchMeals: () => dispatch(getProduct(meal_id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)