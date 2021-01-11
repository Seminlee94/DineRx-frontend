import React, { useState, useEffect} from 'react';
import "./Meal.css"
import MealCard from './Components/MealCard'
import MealCardNow from './Components/MealCardNow'
import { connect } from 'react-redux'
import { getMeal } from '../Redux/actions'
import FilteredMain from './Containers/FilteredMain'

let userDiet = localStorage.getItem("diet")

function Breakfast(props) {
    
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        props.fetchMeals(userDiet)
    })

    const shopSideBarClicker = (category) => {
        let filteredCategory = props.meals.filter(el => el.category === category)
        setFilteredCategory([...filteredCategory])
        setClicked(true)
    }


    const breakfast = () => {
        let newArray = props.meals
        let filteredArray = newArray.filter(el => el.breakfast === true)
        if(props.schedule==="order_ahead"){
            return filteredArray.map((el) => (<MealCard 
                    key={el.id} 
                    meal={el} 
                    viewHandler={props.viewHandler}
                />))
        } else {
            return filteredArray.map((el) => (<MealCardNow 
                    key={el.id} 
                    meal={el} 
                    viewHandler={props.viewHandler}
                />))
        }
    }

    let filteredArray = props.meals.filter(el => el.breakfast === true)
    const [filteredCategory, setFilteredCategory] = useState([filteredArray.map(el => el.category)])
    let uniqueCategory = [...new Set(filteredCategory)]

    return (
        <div className="order-ahead-container">
            <div className="left-sidebar-breakfast">
                <ul className="left-sidebar-ul-breakfast">
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

            {clicked ? 
            
            <FilteredMain meal={filteredCategory} viewHandler={props.viewHandler} />

            :
            
            <div className="breakfast-container">
                {breakfast()}
            </div>

            }     
        </div>
    )
}


const mapStateToProps = (state) => {
    return { meals: state.meals }
} 

const mapDispatchToProps = (dispatch) => {
    return { fetchMeals: (userDiet) => dispatch(getMeal(userDiet))}
}




export default connect(mapStateToProps, mapDispatchToProps)(Breakfast)
