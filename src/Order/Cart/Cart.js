import React from 'react'
import { connect } from 'react-redux'
import { getUserFood } from '../../Redux/actions'
import './Cart.css'
import CartItem from './CartItem'
import TimePick from './TimePick'
import { Link } from "react-router-dom"

let user_id = localStorage.getItem("userId")
let user_restriction = localStorage.getItem("restriction")

class Cart extends React.Component {

    state = {
        selectedOption: ""
    }

    componentDidMount(){
        this.props.fetchUserFood()
    }

    userFoodsNow = () => {
        let filteredMeal = this.props.userFoods.filter(obj => (obj.user_id === parseInt(user_id) && obj.meal_schedule === "order_now"))
        return filteredMeal.map(obj => <CartItem key={obj.id} meal={obj} viewHandler={this.props.viewHandler}/>)
    }

    userFoodsAhead = (meal) => {
        let filteredMeal = this.props.userFoods.filter(obj => (obj.user_id === parseInt(user_id) && obj.meal_schedule === "order_ahead" && obj.meal_types===meal) )
        return filteredMeal.map(obj => <CartItem key={obj.id} meal={obj} viewHandler={this.props.viewHandler} />)
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
    }

    render() {

        let food_calories = this.props.userFoods.map(obj => obj.food.nutritions.filter(nutrition => nutrition.title==="Calories"))
        let food_calories_filter = (food_calories.map(array => array[0]))
        let food_calories_amounts = food_calories_filter.map(calorie => parseInt(calorie.amount))
        let food_calories_sum = food_calories_amounts.reduce((a,b) => a+b, 0)
        let restriction_calorie = user_restriction.split(" ")[2]
        let calorie_exceed = food_calories_sum > restriction_calorie

        // let breakfast_time = 

        // const breakfast = time > 7 && time < 11
        // const lunch = time > 12 && time < 16
        // const dinner = time > 17 && time < 21

        let breakfast_present = this.props.userFoods.filter(obj => obj.meal_types === "breakfast")
        let lunch_present = this.props.userFoods.filter(obj => obj.meal_types === "lunch")
        let dinner_present = this.props.userFoods.filter(obj => obj.meal_types === "dinner")

        return(

            <>
                <div className="incart-header">
                    My Cart
                </div>

                <form className="incart-radio-option">

                    <div className="radio">
                        <label>
                            <input type="radio" value="order_now"
                                        checked={this.state.selectedOption === 'order_now'} 
                                        onChange={this.handleOptionChange} />
                            Order Now
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" value="order_ahead-breakfast"
                                        checked={this.state.selectedOption === 'order_ahead-breakfast'} 
                                        onChange={this.handleOptionChange} />
                            Order Ahead Breakfast
                        </label>
                    </div>
                    
                    <div className="radio">
                        <label>
                            <input type="radio" value="order_ahead_lunch"
                                        checked={this.state.selectedOption === 'order_ahead_lunch'} 
                                        onChange={this.handleOptionChange} />
                            Order Ahead Lunch
                        </label>
                    </div>

                    <div className="radio">
                        <label>
                            <input type="radio" value="order_ahead_dinner" 
                                        checked={this.state.selectedOption === 'order_ahead_dinner'} 
                                        onChange={this.handleOptionChange} />
                            Order Ahead Dinner
                        </label>
                    </div>

                </form>


                {this.state.selectedOption==='order_now' ? 
                    <div className="incart-meal-now">
                        <div className="incart-meal-container">
                            {this.userFoodsNow()}
                        </div>

                    </div> 
                : null}

                {this.state.selectedOption==='order_ahead-breakfast' ? 
                    <>

                        <div className="incart-meal-ahead">
                            <div className="incart-meal-container">
                                {breakfast_present.length > 0 ? 
                                    this.userFoodsAhead("breakfast")
                                :
                                <div className="empty-cart-container">
                                    <div className="empty-cart">Breakfast order is empty! </div>
                                    <div className="empty-cart">Would you like to order your breakfast ahead?</div>
                                    <div className="empty-cart-button">
                                        <Link to={{ pathname: '/orderahead'}} >
                                            <button>Order Ahead</button>
                                        </Link>
                                    </div>

                                </div>

                                } 
                            </div>
                        </div> 

                        <div className="incart-calorie-container">
                            The total calorie in your cart is <span style={calorie_exceed ? {color: "red"} :  {color: "black"} } >{food_calories_sum}</span>.
                            {food_calories_sum > restriction_calorie 
                            ? 
                            <div>Calorie in the cart exceeds your restriction. Please remove items.</div> 
                            : 
                            <TimePick />}
                        </div>

                    </>
                : null}

                {this.state.selectedOption==='order_ahead_lunch' ? 
                    <>
                        <div className="incart-meal-ahead">
                            <div className="incart-meal-container">
                            {lunch_present.length > 0 ? 
                                    this.userFoodsAhead("lunch")
                                :
                                <div className="empty-cart-container">
                                    <div className="empty-cart">Lunch order is empty! </div>
                                    <div className="empty-cart">Would you like to order your lunch ahead?</div>
                                    <div className="empty-cart-button">
                                        <Link to={{ pathname: '/orderahead'}} >
                                            <button>Order Ahead</button>
                                        </Link>
                                    </div>

                                </div>

                                } 
                            </div>
                        </div> 

                        <div className="incart-calorie-container">
                            The total calorie in your cart is <span style={calorie_exceed ? {color: "red"} :  {color: "black"} } >{food_calories_sum}</span>.
                            {food_calories_sum > restriction_calorie 
                            ? 
                            <div>Calorie in the cart exceeds your restriction. Please remove items.</div> 
                            : 
                            <TimePick />}
                        </div>

                    </>
                : null}

                {this.state.selectedOption==='order_ahead_dinner' ? 

                    <>
                        <div className="incart-meal-ahead">
                            <div className="incart-meal-container">
                            {dinner_present.length > 0 ? 
                                    this.userFoodsAhead("dinner")
                                :
                                    <div className="empty-cart-container">
                                        <div className="empty-cart">Dinner order is empty! </div>
                                        <div className="empty-cart">Would you like to order your dinner ahead?</div>
                                        <div className="empty-cart-button">
                                            <Link to={{ pathname: '/orderahead'}} >
                                                <button>Order Ahead</button>
                                            </Link>
                                        </div>

                                    </div>

                                } 
                            </div>
                        </div> 

                        <div className="incart-calorie-container" >
                            The total calorie in your cart is <span style={calorie_exceed ? {color: "red"} :  {color: "black"} } >{food_calories_sum}</span>.
                            
                            <div className="incart-order">
                                {food_calories_sum > restriction_calorie 
                                ? 
                                <div>Calorie in the cart exceeds your restriction. Please remove items.</div> 
                                : 
                                <TimePick />}
                            </div>

                        </div>                        
                    </>

                : null}

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
}

const mapDispatchToProps = (dispatch) => {
    return {fetchUserFood: () => dispatch(getUserFood())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)