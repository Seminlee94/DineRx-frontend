import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserFood } from '../../Redux/actions'
import RightSideItemCard from './RightSideItemCard'
import './Cart.css'
import * as faIcons from "react-icons/io"
import * as cgIcons from "react-icons/cg"


let user_id = localStorage.getItem("userId")

function RightSideItem(props) {

    const [bclicked, setBclicked] = useState(false)
    const [lclicked, setLclicked] = useState(false)
    const [dclicked, setDclicked] = useState(false)
    const [cartClicked, setCartClicked] = useState(false)

    useEffect(() => {
        props.fetchUserFood()
    })

    const breakfastClickHandler = () => {
        setBclicked(!bclicked)
    }
    const lunchClickHandler = () => {
        setLclicked(!lclicked)
    }
    const dinnerClickHandler = () => {
        setDclicked(!dclicked)
    }
    const cartClickHandler = () => {
        setCartClicked(!cartClicked)
    }

    const userFoods = (meal) => {
        let filtered = props.userFoods.filter(food => (food.meal_types===meal && food.user_id === parseInt(user_id) && food.meal_schedule === "order_ahead"))
        return filtered.map(el => <RightSideItemCard key={el.id} meal={el.food} userFood_id={el.id} />)
    }

    const userFoodsNow = () => {
        let filtered = props.userFoods.filter(food => (food.meal_schedule === "order_now" && food.user_id ===parseInt(user_id)))
        return filtered.map(el => <RightSideItemCard key={el.id} meal={el.food} userFood_id={el.id} />)
    }

    return(
        <>
        {(props.schedule === "order_ahead") 
        
        ? 

            <div className={cartClicked ? "accordion-inactive" : "accordion"} >
                <div className="cart-container-top">
                    <div className="cart-icon" onClick={cartClickHandler}>
                        {cartClicked ? <cgIcons.CgArrowLeftR /> : <cgIcons.CgArrowRightR /> }
                    </div>

                    <div className="cart-container-top-cart">
                        Cart
                    </div>
                </div>
                <div className={bclicked ? "contentBx-active" : "contentBx" } >
                    <div className="content-container" onClick={breakfastClickHandler} style={{ background: "#CCCCCB" }}>
                        <div className="label">
                            Breakfast
                        </div>
                        <div className="icon">
                            {bclicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                        </div>
                    </div>
                    <div className={bclicked ? "content-active" :  "content" } >
                        {userFoods("breakfast")}
                    </div>
                </div>

                <div className={lclicked ? "contentBx-active" : "contentBx" }>
                    <div className="content-container"  onClick={lunchClickHandler} style={{ background: "#B0B0AF " }}>
                        <div className="label" >
                            Lunch
                        </div>
                        <div className="icon">
                            {lclicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                        </div>
                    </div>
                    <div className={lclicked ? "content-active" :  "content" }>
                        {userFoods("lunch")}
                    </div>
                </div>

                <div className={dclicked ? "contentBx-active" : "contentBx" } >
                    <div className="content-container" onClick={dinnerClickHandler} style={{ background: "#8A8A89 " }}>
                        <div className="label" >
                            Dinner
                        </div>
                        <div className="icon">
                            {dclicked ? <faIcons.IoIosArrowUp /> : <faIcons.IoIosArrowDown /> }
                        </div>
                    </div>
                    <div className={dclicked ? "content-active" :  "content" }>
                        {userFoods("dinner")}
                    </div>
                </div>
                <a href="/cart" className="go-cart-href">
                    <div className="go-to-cart">
                        Go to Cart
                    </div>
                </a>

            </div>

            :

            <>
                <div className={cartClicked ? "accordion-inactive" : "accordion"} >
                    <div className="cart-container-top">
                        <div className="cart-icon" onClick={cartClickHandler}>
                            {cartClicked ? <cgIcons.CgArrowLeftR /> : <cgIcons.CgArrowRightR /> }
                        </div>

                        <div className="cart-container-top-cart">
                            Cart
                        </div>
                    </div>
                    <div className="ordernow-meal-container">
                        {userFoodsNow()}
                    </div>

                    <a href="/cart">
                        <div className="go-to-cart">
                            Go to Cart
                        </div>
                    </a>
                </div>
            </>
        }
        </>
    )
}


const mapStateToProps = (state) => {
    return { userFoods: state.keyuserFoods }
} 

const mapDispatchToProps = (dispatch) => {
    return { fetchUserFood: () => dispatch(getUserFood())}
}


export default connect(mapStateToProps, mapDispatchToProps)(RightSideItem)
