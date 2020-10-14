import React from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../Redux/actions'
import Ingredient from "./Containers/Ingredient"
import Nutrition from "./Containers/Nutrition"
import "./Meal.css"
import * as faIcons from "react-icons/io"


// let meal_id = window.location.href.split("/").splice(-1)[0]
// console.log(this.props.clickedId)

class Product extends React.Component {

    state = {
        clicked: false,
    }

    componentDidMount(){
        this.props.fetchMeals(this.props.clickedId)
    }

    clickHandler = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        // let mealIngredients = this.props.product.ingredients
        // console.log(mealIngredients)

        // console.log(this.props.clickedId, "in product")
        // console.log(this.props.product, "in product")

        return ( 
            <div className="product-container">
            <>
            {this.props.product==={} 
            
            ?

            null

            :

            <>
                <div className="product-container-card">
                    <div className="product-image-container">
                        <img 
                            src={this.props.product.image} 
                            className="product-image"
                            alt={this.props.product.name}
                        />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {this.props.product.name}
                        </div>
                        <div className="product-description">
                            {this.props.product.description}
                        </div>

                    </div>
                </div>

                <div className="product-ingredient-container">
                    <div className="product-ingredient-top">
                        Ingredients in {this.props.product.name}
                    </div>

                    <Ingredient ingredients={this.props.product.ingredients} />
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
                            {this.state.clicked ? <Nutrition nutritions={this.props.product.nutritions} /> : null }
                    </div>
                </div>
            </>

            }

            </>

        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { product: state.product }
} 


const mapDispatchToProps = (dispatch) => {
    return { fetchMeals: (clickedId) => dispatch(getProduct(clickedId))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)