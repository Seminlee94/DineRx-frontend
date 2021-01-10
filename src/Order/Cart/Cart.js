import React from 'react'
import { connect } from 'react-redux'
import { getUserFood } from '../../Redux/actions'
import './Cart.css'
import CartItem from './CartItem'
import TimePick from './TimePick'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

let user_id = localStorage.getItem("userId")
let user_restriction = localStorage.getItem("restriction")

class Cart extends React.Component {

    state = {
        selectedOption: "",
        userOrders: [],
        submitted: false
    }

    componentDidMount(){
        // this.props.fetchUserFood()
        fetch("http://localhost:3000/api/v1/user_orders")
            .then(resp => resp.json())
            .then(data => {
                this.setState(() => ({ userOrders: data }), () => this.props.fetchUserFood())
            })
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

    mealCaloriesAhead = (meal_schedule, meal_type) => {
        let meal_filter_ahead = this.props.userFoods.filter(obj => (obj.user_id ===parseInt(user_id) && (obj.meal_schedule===meal_schedule) && (obj.meal_types===meal_type)))
        let meal_nutrition_ahead = meal_filter_ahead.map(obj => obj.food.nutritions.filter(nutrition => nutrition.title==="Calories"))
        let meal_calories_filter = meal_nutrition_ahead.map(arr => arr[0])
        let meal_calories_amounts = meal_calories_filter.map(calorie => parseInt(calorie.amount))
        return  meal_calories_amounts.reduce((a,b) => a+b, 0)
    }

    mealCaloriesNow = (meal_schedule) => {
        let meal_filter_now = this.props.userFoods.filter(obj => (obj.user_id ===parseInt(user_id) && (obj.meal_schedule===meal_schedule)))
        let meal_nutrition_now = meal_filter_now.map(obj => obj.food.nutritions.filter(nutrition => nutrition.title==="Calories"))
        let meal_calories_filter = meal_nutrition_now.map(arr => arr[0])
        let meal_calories_amounts = meal_calories_filter.map(calorie => parseInt(calorie.amount))
        return  meal_calories_amounts.reduce((a,b) => a+b, 0)
    }


    render() {
        let userFoods_ahead = this.props.userFoods.filter(obj => (obj.user_id ===parseInt(user_id) && (obj.meal_schedule==="order_ahead")))
        let food_calories_ahead = userFoods_ahead.map(obj => obj.food.nutritions.filter(nutrition => nutrition.title === "Calories"))
        let food_calories_filter = (food_calories_ahead.map(array => array[0]))
        let food_calories_amounts = food_calories_filter.map(calorie => parseInt(calorie.amount))
        let food_calories_sum = food_calories_amounts.reduce((a,b) => a+b, 0)

        console.log(user_restriction)

        let restriction_calorie = user_restriction.split(" ")[2]
        let calorie_exceed = food_calories_sum > restriction_calorie

        let order_now_present = this.props.userFoods.filter(obj => (obj.user_id ===parseInt(user_id) && (obj.meal_schedule === "order_now")))
        let breakfast_present = this.props.userFoods.filter(obj => (obj.user_id ===parseInt(user_id) && (obj.meal_types === "breakfast") && (obj.meal_schedule === "order_ahead")))
        let lunch_present = this.props.userFoods.filter(obj => (obj.user_id ===parseInt(user_id) && (obj.meal_types === "lunch") && (obj.meal_schedule === "order_ahead")))
        let dinner_present = this.props.userFoods.filter(obj => (obj.user_id ===parseInt(user_id) && (obj.meal_types === "dinner") && (obj.meal_schedule === "order_ahead")))

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
                            {order_now_present.length > 0 ?

                                <>
                                    <div className="incart-meal">
                                        {this.userFoodsNow()}
                                    </div>

                                    <div className="incart-order">
                                        <div className="incart-form">
                                            <div className="incart-place-order">
                                                <h6>Place Order!</h6>
                                            </div>

                                            <div className="incart-meal-calories">
                                                Total calories in this meal: <br/><b>{this.mealCaloriesNow("order_now")}</b> calories
                                            </div>

                                            <div className="incart-meal-calories">
                                                Total calories in order ahead: <br/><b>{food_calories_sum}</b> calories
                                            </div>

                                            <div className="incart-time-pick">
                                                <TimePick meal={order_now_present} schedule="order_now" />
                                            </div>
                                        </div>
                                    </div>
                                </>

                            :
                            <div className="empty-cart-container">
                                    <div className="empty-cart">Order is empty! </div>
                                    <div className="empty-cart">Would you like to order now?</div>
                                    <div className="empty-cart-button">
                                        <Link to={{ pathname: '/ordernow'}} className="order-button">
                                            <Button 
                                                variant="contained" 
                                                color="primary" 
                                                href="/orderahead"
                                                style={{ marginLeft: "20" }}
                                                >
                                                    Order Now
                                            </Button>
                                        </Link>
                                    </div>

                                </div>
                        }
                        </div>

                    </div> 

                : null}

                {this.state.selectedOption==='order_ahead-breakfast' ? 
                    <>

                        <div className="incart-meal-ahead">
                            <div className="incart-meal-container">
                                {breakfast_present.length > 0 ? 
                                    <>
                                        <div className="incart-meal">
                                            {this.userFoodsAhead("breakfast")}
                                        </div>


                                        <div className="incart-order">

                                            {food_calories_sum > restriction_calorie 
                                            ? 
                                            <div className="incart-form">
                                                <div className="incart-exceed-top">
                                                    Caution
                                                </div>
                                                <div className="incart-exceed-center">
                                                    You have <span style={calorie_exceed ? {color: "red"} :  {color: "black"} }>{food_calories_sum}</span> calories in the cart.
                                                    You can`t submit orders until you meet the restricted calorie amount.
                                                </div>
                                            </div> 

                                            : 
                                                <>
                                                    {this.state.userOrders.filter(obj => obj.order_id === 1).length > 0
                                                    
                                                    ? 
                                                    
                                                    null 
                                                    
                                                    :
                                                        <div className="incart-form">
                                                            <div className="incart-place-order">
                                                                <h6>Place Order!</h6> <em>Breakfast time is from 7 AM to 11 AM</em>
                                                            </div>

                                                            <div className="incart-meal-calories">
                                                                Total calories in this meal: <br/><b>{this.mealCaloriesAhead("order_ahead", "breakfast")}</b> calories
                                                            </div>

                                                            <div className="incart-meal-calories">
                                                                Total calories in order ahead: <br/><b>{food_calories_sum}</b> calories
                                                            </div>

                                                            <div className="incart-time-pick">
                                                                <TimePick meal={breakfast_present} type="breakfast" schedule="order_ahead" />
                                                            </div>
                                                        </div>

                                                    }
                                                </>
                                            }
                                        </div>
                                    </>
                                :
                                <div className="empty-cart-container">
                                    <div className="empty-cart">Breakfast order is empty! </div>
                                    <div className="empty-cart">Would you like to order your breakfast ahead?</div>
                                    <div className="empty-cart-button">
                                        <Link to={{ pathname: '/orderahead'}} className="order-button">
                                            <Button 
                                                variant="contained" 
                                                color="primary" 
                                                href="/orderahead"
                                                style={{ marginLeft: "20" }}
                                                >
                                                    Order Ahead
                                            </Button>
                                        </Link>
                                    </div>

                                </div>

                                } 
                            </div>
                        </div> 

                    </>
                : null}

                {this.state.selectedOption==='order_ahead_lunch' ? 
                    <>
                        <div className="incart-meal-ahead">
                            <div className="incart-meal-container">
                            {lunch_present.length > 0 ? 
                                    <>
                                        <div className="incart-meal">
                                            {this.userFoodsAhead("lunch")}
                                        </div>
                                        
                                            <div className="incart-order">

                                                {food_calories_sum > restriction_calorie 
                                                ? 
                                                <div className="incart-form">
                                                    <div className="incart-exceed-top">
                                                        Caution
                                                    </div>
                                                    <div className="incart-exceed-center">
                                                        You have <span style={calorie_exceed ? {color: "red"} :  {color: "black"} }>{food_calories_sum}</span> calories in the cart. 
                                                        You can`t submit orders until you meet the restricted calorie amount.
                                                    </div>
                                                </div> 
                                                : 
                                                <>
                                                        {this.state.userOrders.filter(obj => obj.order_id === 2).length > 0
                                                            
                                                        ? 
                                                        
                                                        null 
                                                        
                                                        :
                                                        <div className="incart-form">
                                                            <div className="incart-place-order">
                                                                <h6>Place Order!</h6> <em>Lunch time is from 12 PM to 4 PM</em>
                                                            </div>

                                                            <div className="incart-meal-calories">
                                                                Total calories in this meal: <br/><b>{this.mealCaloriesAhead("order_ahead", "lunch")}</b> calories
                                                            </div>

                                                            <div className="incart-meal-calories">
                                                                Total calories in order ahead: <br/><b>{food_calories_sum}</b> calories
                                                            </div>


                                                            <div className="incart-time-pick">
                                                                <TimePick meal={lunch_present} type="lunch" schedule="order_ahead" />
                                                            </div>
                                                        </div>

                                                        }

                                                </>
                                                }
                                                </div>
                                            {/* </div> */}
                                    </>

                                :
                                <div className="empty-cart-container">
                                    <div className="empty-cart">Lunch order is empty! </div>
                                    <div className="empty-cart">Would you like to order your lunch ahead?</div>
                                    <div className="empty-cart-button">
                                        <Link to={{ pathname: '/orderahead'}} className="order-button">
                                            <Button 
                                                variant="contained" 
                                                color="primary" 
                                                href="/orderahead"
                                                style={{ marginLeft: "20" }}
                                                >
                                                    Order Ahead
                                            </Button>
                                        </Link>
                                    </div>

                                </div>

                                } 
                            </div>
                        </div> 


                    </>
                : null}

                {this.state.selectedOption==='order_ahead_dinner' ? 

                    <>
                        <div className="incart-meal-ahead">
                            <div className="incart-meal-container">
                            {dinner_present.length > 0 ? 
                                    <>
                                        <div className="incart-meal">
                                            {this.userFoodsAhead("dinner")}
                                        </div>
                                            
                                            <div className="incart-order">
                                                {food_calories_sum > restriction_calorie 
                                                ? 

                                                    <div className="incart-form">
                                                        <div className="incart-exceed-top">
                                                            Caution
                                                        </div>
                                                        <div className="incart-exceed-center">
                                                            You have <span style={calorie_exceed ? {color: "red"} :  {color: "black"} }>{food_calories_sum}</span> calories in the cart. 
                                                            You can`t submit orders until you meet the restricted calorie amount.
                                                        </div>
                                                    </div> 
  
                                                : 
                                                <>
                                                    {this.state.userOrders.filter(obj => obj.order_id === 3).length > 0
                                                    
                                                    ? 
                                                    
                                                    null 
                                                    
                                                    :
                                                        <div className="incart-form">
                                                            <div className="incart-place-order">
                                                                <h6>Place Order!</h6> <em>Dinner time is from 5 PM to 9 PM</em>
                                                            </div>

                                                            <div className="incart-meal-calories">
                                                                Total calories in this meal: <br/><b>{this.mealCaloriesAhead("order_ahead", "dinner")}</b> calories
                                                            </div>

                                                            <div className="incart-meal-calories">
                                                                Total calories in order ahead: <br/><b>{food_calories_sum}</b> calories
                                                            </div>

                                                            <div className="incart-time-pick">
                                                                <TimePick meal={dinner_present} type="dinner" schedule="order_ahead" />
                                                            </div>
                                                        </div>
                    
                                                    }

                                                </>
                                                }
                                            </div>
                                    </>
                                :
                                    <div className="empty-cart-container">
                                        <div className="empty-cart">Dinner order is empty! </div>
                                        <div className="empty-cart">Would you like to order your dinner ahead?</div>
                                        <div className="empty-cart-button">
                                            <Link to={{ pathname: '/orderahead'}} className="order-button" >
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    href="/orderahead"
                                                    style={{ marginLeft: "20" }}
                                                    >
                                                        Order Ahead
                                                </Button>
                                            </Link>
                                        </div>

                                    </div>

                                } 
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