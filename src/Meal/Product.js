import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getProduct } from '../Redux/actions'
import Ingredient from "./Containers/Ingredient"
import Nutrition from "./Containers/Nutrition"
import "./Meal.css"
import * as faIcons from "react-icons/io"

function Product(props) {

    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        props.fetchMeals(props.clickedId)
    })

        return ( 
            <div className="product-container">

                {props.product==={} 
                
                ?
                    null
                :
                    <>
                        <div className="product-container-card">
                            <div className="product-image-container">
                                <img 
                                    src={props.product.image} 
                                    className="product-image"
                                    alt={props.product.name}
                                />
                            </div>
                            <div className="product-details">
                                <div className="product-name">
                                    {props.product.name}
                                </div>
                                <div className="product-description">
                                    {props.product.description}
                                </div>

                            </div>
                        </div>

                        <div className="product-ingredient-container">
                            <div className="product-ingredient-top">
                                Ingredients in {props.product.name}
                            </div>

                            <Ingredient ingredients={props.product.ingredients} />
                        </div>

                        <div className="product-nutrition-container">
                            <div className="product-blank"/>
                                <div className="product-nutrition-top">
                                    Nutrition Information
                                </div>
                                <div className="view-summary-container" onClick={() => setClicked(!clicked)}>
                                    <div className="view-summary">
                                        View Nutrition Summary
                                    </div>
                                    <div className="view-summary-icon">
                                        {clicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                                    </div>
                                </div>
                                <div className="product-nutrition-details">
                                    {clicked ? <Nutrition nutritions={props.product.nutritions} /> : null }
                            </div>
                        </div>
                    </>
                }
            </div>
        )
    }


const mapStateToProps = (state) => {
    return { product: state.product }
} 


const mapDispatchToProps = (dispatch) => {
    return { fetchMeals: (clickedId) => dispatch(getProduct(clickedId))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)