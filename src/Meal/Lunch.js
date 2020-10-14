import React from 'react';
import "./Meal.css"
import MealCard from './Components/MealCard'
import { connect } from 'react-redux'
import { getMeal } from '../Redux/actions'
import FilteredMain from './Containers/FilteredMain'
// import LeftSidebar from './Containers/LeftSidebar'
// import Main from './Containers/Main'


class Lunch extends React.Component {

    state = {
        clicked: false,
        filteredCategory: []
    }


    componentDidMount(){
        this.props.fetchMeals()
    }
    
    shopSideBarClicker = (category) => {
        let filteredCategory = this.props.meals.filter(el => el.category === category)
        this.setState(() => ({
          filteredCategory: [...filteredCategory],
          clicked: true,
        }))
    }


    lunch = () => {
        let newArray = this.props.meals
        let filteredArray = newArray.filter(el => el.lunch === true)
        return filteredArray.map(el => <MealCard key={el.id} meal={el} viewHandler={this.props.viewHandler} />)
    }


    // submitHandler = (e) => {
    //     e.preventDefault()
    //     this.props.submitHandler
    // }

    render() {
        let filteredArray = this.props.meals.filter(el => el.lunch === true)
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
                            {this.lunch()}
                        </div>
                        // <Main />
        
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


export default connect(mapStateToProps, mapDispatchToProps)(Lunch)