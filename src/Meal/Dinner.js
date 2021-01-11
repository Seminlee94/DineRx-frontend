import React, { useState, useEffect } from 'react';
import "./Meal.css"
import MealCard from './Components/MealCard'
import MealCardNow from './Components/MealCardNow'
import { connect } from 'react-redux'
import { getMeal } from '../Redux/actions'
import FilteredMain from './Containers/FilteredMain'

let userDiet = localStorage.getItem("diet")

function Dinner(props) {

    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        props.fetchMeals(userDiet)
    })
    
    const shopSideBarClicker = (category) => {
        let filteredCategory = props.meals.filter(el => el.category === category)
        setFilteredCategory([...filteredCategory])
        setClicked(true)
    }


    const dinnerAhead = () => {
        let newArray = props.meals
        let filteredArray = newArray.filter(el => el.dinner === true)
        return filteredArray.map(el => <MealCard key={el.id} meal={el} viewHandler={props.viewHandler} schedule={props.schedule} />)
    }

    const dinnerNow = () => {
        let newArray = props.meals
        let filteredArray = newArray.filter(el => el.dinner === true)
        return filteredArray.map(el => <MealCardNow key={el.id} meal={el} viewHandler={props.viewHandler} schedule={props.schedule} />)
    }

    let filteredArray = props.meals.filter(el => el.dinner === true)
    const [filteredCategory, setFilteredCategory] = useState(filteredArray.map(el => el.category))
    let uniqueCategory = [...new Set(filteredCategory)]
    
    return (

        <div className="order-ahead-container">
            <div className="left-sidebar">
                <ul className="left-sidebar-ul">
                    {uniqueCategory.map((item, index) => {
                        return (
                            <li 
                                key={index}
                                onClick={()=> shopSideBarClicker(item)}
                            >
                                {item}
                            </li>
                        )
                    } )}
                </ul>
            </div>

            {clicked ? (

                <>
            
                    <FilteredMain meal={filteredCategory} viewHandler={props.viewHandler} />
                </>

            ) :

                <div className="breakfast-container">
                    {props.schedule === "order_ahead" 
                    
                    ?
                    
                    dinnerAhead()

                    :

                    dinnerNow()
                
                }

                </div>
            }
        </div>
    )
}


///read action

const mapStateToProps = (state) => {
    return { meals: state.meals }
} 

const mapDispatchToProps = (dispatch) => {
    return { fetchMeals: (userDiet) => dispatch(getMeal(userDiet))}
}


export default connect(mapStateToProps, mapDispatchToProps)(Dinner)