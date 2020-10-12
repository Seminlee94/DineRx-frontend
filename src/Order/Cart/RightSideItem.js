import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../Redux/actions'
import RightSideItemCard from './RightSideItemCard'
import './Cart.css'
import * as faIcons from "react-icons/io"
import * as bsIcons from "react-icons/bs"


let user_id = localStorage.getItem("userId")

class RightSideItem extends React.Component {

    state = {
        bclicked: false,
        lclicked: false,
        dclicked: false,
    }

    componentDidMount(){
        this.props.fetchUser();
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
    

    userBreakfastFoods = () => {
        let filtered = this.props.userFoods.filter(food => food.breakfast)
        return filtered.map(el => <RightSideItemCard key={el.id} meal={el} />)
    }

    userLunchFoods = () => {
        let filtered = this.props.userFoods.filter(food => food.lunch)
        return filtered.map(el => <RightSideItemCard key={el.id} meal={el} />)
    }

    userDinnerFoods = () => {
        let filtered = this.props.userFoods.filter(food => food.dinner)
        return filtered.map(el => <RightSideItemCard key={el.id} meal={el} />)
    }
        
    render(){
        return(
            <div className="accordion">
                <div className="cart-container-top">
                    <div className="cart-icon">
                        {this.state.cartClicked ? <bsIcons.BsArrowBarLeft /> : <bsIcons.BsArrowBarRight /> }
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
                        {this.userBreakfastFoods()}
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
                        {this.userLunchFoods()}
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
                        {this.userDinnerFoods()}
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
} 

const mapDispatchToProps = (dispatch) => {
    return { fetchUser: () => dispatch(getUser(user_id))}
}


export default connect(mapStateToProps, mapDispatchToProps)(RightSideItem)
