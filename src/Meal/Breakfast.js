import React from 'react';
import "./Meal.css"
import MealCard from './Components/MealCard'
import { connect } from 'react-redux'
import { getMeal } from '../Redux/actions'
import FilteredMain from './Containers/FilteredMain'
// import LeftSidebar from './Containers/LeftSidebar'
// import Main from './Containers/Main'


class Breakfast extends React.Component {

    state = {
        clicked: false,
        filteredCategory: []
    }
    
    componentDidMount(){
        this.props.fetchMeals()
    }
    
    shopSideBarClicker = (category) => {
        // console.log("clicked", category)
        let filteredCategory = this.props.meals.filter(el => el.category === category)
        this.setState(() => ({
          filteredCategory: [...filteredCategory],
          clicked: true,
        }))
    }


    breakfast = () => {
        // console.log(this.props)
        let newArray = this.props.meals
        let filteredArray = newArray.filter(el => el.breakfast === true)
        return filteredArray.map((el) => (<MealCard 
                key={el.id} 
                meal={el} 
                viewHandler={this.props.viewHandler}
            />))
    }


    // submitHandler = (e) => {
    //     e.preventDefault()
    //     this.props.submitHandler
    // }

    render() {
        let filteredArray = this.props.meals.filter(el => el.breakfast === true)
        let filteredCategory = filteredArray.map(el => el.category)
        let uniqueCategory = [...new Set(filteredCategory)]
        
        return (
            <div className="order-ahead-container">
                <div className="left-sidebar">
                    <ul className="left-sidebar-ul">
                        {uniqueCategory.map((item, index) => {
                            return (
                                <li 
                                    key={index}
                                    onClick={()=> this.shopSideBarClicker(item)}
                                >
                                    {item}
                                </li>
                            )
                        } )}
                    </ul>
                </div>

                   {this.state.clicked ? (
     
                        <>
                    
                            <FilteredMain meal={this.state.filteredCategory} viewHandler={this.props.viewHandler} />
                        </>

                    ) :
                        <div className="breakfast-container">
                            {this.breakfast()}
                        </div>
        
                    }     


            </div>

    
        )
    }
}

///read action

const mapStateToProps = (state) => {
    return { meals: state.meals }
} 

const mapDispatchToProps = (dispatch) => {
    return { fetchMeals: () => dispatch(getMeal())}
}


////write action
// const mapDispatchToProps = (dispatch) => {
//     //////dispatch: to take in an action and then call our reducer and pass that action into the reducer//////
//     return { submitHandler: (mealObj) => dispatch({type: "add meal", payload: mealObj}) }     ->
        // return  { submitHandler: (mealObj) => dispatch(addMeal())}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Breakfast)
// export default connect(null, mapDispatchToProps)(Breakfast)

// export default Breakfast