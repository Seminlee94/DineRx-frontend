import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../Redux/actions'
import './Cart.css'
import CartItem from './CartItem'

let user_id = localStorage.getItem("userId")

class Cart extends React.Component {

    state = {
        selectedOption: ""
    }

    componentDidMount(){
        this.props.fetchUser()
    }

    userFoodsNow = () => {
        let filteredMeal = this.props.userFoods.filter(obj => (obj.user_id === parseInt(user_id) && obj.meal_schedule === "order_now"))
        return filteredMeal.map(obj => <CartItem key={obj.id} meal={obj} viewHandler={this.props.viewHandler}/>)
    }

    userFoodsAheadBreakfast = () => {
        let filteredMeal = this.props.userFoods.filter(obj => (obj.user_id === parseInt(user_id) && obj.meal_schedule === "order_ahead" && obj.meal_types==="breakfast") )
        return filteredMeal.map(obj => <CartItem key={obj.id} meal={obj} viewHandler={this.props.viewHandler} />)
    }

    userFoodsAheadLunch = () => {
        let filteredMeal = this.props.userFoods.filter(obj => (obj.user_id === parseInt(user_id) && obj.meal_schedule === "order_ahead" && obj.meal_types==="lunch") )
        return filteredMeal.map(obj => <CartItem key={obj.id} meal={obj} viewHandler={this.props.viewHandler}/>)
    }

    userFoodsAheadDinner = () => {
        let filteredMeal = this.props.userFoods.filter(obj => (obj.user_id === parseInt(user_id) && obj.meal_schedule === "order_ahead" && obj.meal_types==="dinner") )
        return filteredMeal.map(obj => <CartItem key={obj.id} meal={obj} viewHandler={this.props.viewHandler}/>)
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
                    <div className="incart-meal-ahead">


                        <div className="incart-meal-container">
                            {this.userFoodsAheadBreakfast()} 
                        </div>

                        <div className="incart-calories-sum">
                            {food_calories_sum}
                        </div>
                    </div> 
                    : null}

                {this.state.selectedOption==='order_ahead_lunch' ? 
                    <div className="incart-meal-ahead">


                        <div className="incart-meal-container">
                            {this.userFoodsAheadLunch()} 
                        </div>

                        <div className="incart-calories-sum">
                            {food_calories_sum}
                        </div>
                    </div> 
                        : null}

                {this.state.selectedOption==='order_ahead_dinner' ? 
                    <div className="incart-meal-ahead">

                        <div className="incart-meal-container">
                            {this.userFoodsAheadDinner()} 
                        </div>

                        <div className="incart-calories-sum">
                            {food_calories_sum}
                        </div>
                    </div> 
                        : null}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
}

const mapDispatchToProps = (dispatch) => {
    return {fetchUser: () => dispatch(getUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)