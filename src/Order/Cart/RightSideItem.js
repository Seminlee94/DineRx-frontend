import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { getUserFood } from '../../Redux/actions'
import RightSideItemCard from './RightSideItemCard'
import './Cart.css'
import * as faIcons from "react-icons/io"
import * as cgIcons from "react-icons/cg"


let user_id = localStorage.getItem("userId")

class RightSideItem extends React.Component {

    state = {
        bclicked: false,
        lclicked: false,
        dclicked: false,
    }

    componentDidMount(){
        this.props.fetchUserFood();
    }

    breakfastClickHandler = () => {
        this.setState({ bclicked: !this.state.bclicked })
    }
    lunchClickHandler = () => {
        this.setState({ lclicked: !this.state.lclicked })
    }
    dinnerClickHandler = () => {
        this.setState({ dclicked: !this.state.dclicked })
    }
    cartClickHandler = () => {
        this.setState({ cartClicked: !this.state.cartClicked })
    }

    deleteUserFood = (id) => {
        this.props.deleteUserFood(id)
    }
    

    userFoods = (meal) => {
        // console.log(this.props.userFoods)
        let filtered = this.props.userFoods.filter(food => (food.meal_types===meal && food.user_id === parseInt(user_id)))
        return filtered.map(el => <RightSideItemCard key={el.id} meal={el.food} userFood_id={el.id} />)
    }

    render(){
        return(
            <div className={this.state.cartClicked ? "accordion-inactive" : "accordion"} >
                <div className="cart-container-top">
                    <div className="cart-icon" onClick={this.cartClickHandler}>
                        {this.state.cartClicked ? <cgIcons.CgArrowLeftR /> : <cgIcons.CgArrowRightR /> }
                    </div>

                    <div className="cart-container-top-cart">
                        Cart
                    </div>
                </div>
                <div className={this.state.bclicked ? "contentBx-active" : "contentBx" } >
                    <div className="content-container" onClick={this.breakfastClickHandler} style={{ background: "#CCCCCB" }}>
                        <div className="label">
                            Breakfast
                        </div>
                        <div className="icon">
                            {this.state.bclicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                        </div>
                    </div>
                    <div className={this.state.bclicked ? "content-active" :  "content" } >
                        {this.userFoods("breakfast")}
                    </div>
                </div>

                <div className={this.state.lclicked ? "contentBx-active" : "contentBx" }>
                    <div className="content-container"  onClick={this.lunchClickHandler} style={{ background: "#B0B0AF " }}>
                        <div className="label" >
                            Lunch
                        </div>
                        <div className="icon">
                            {this.state.lclicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                        </div>
                    </div>
                    <div className={this.state.lclicked ? "content-active" :  "content" }>
                        {this.userFoods("lunch")}
                    </div>
                </div>

                <div className={this.state.dclicked ? "contentBx-active" : "contentBx" } >
                    <div className="content-container" onClick={this.dinnerClickHandler} style={{ background: "#8A8A89 " }}>
                        <div className="label" >
                            Dinner
                        </div>
                        <div className="icon">
                            {this.state.dclicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                        </div>
                    </div>
                    <div className={this.state.dclicked ? "content-active" :  "content" }>
                        {this.userFoods("dinner")}
                    </div>
                </div>
                <Link to={{ pathname: 'cart' }} >
                    <div className="go-to-cart">
                        Go to Cart
                    </div>
                </Link>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
} 

const mapDispatchToProps = (dispatch) => {
    return { fetchUserFood: () => dispatch(getUserFood())}
}


export default connect(mapStateToProps, mapDispatchToProps)(RightSideItem)
