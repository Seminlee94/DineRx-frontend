import React, { useState, useEffect } from "react";
import './OrderAhead.css'
import Breakfast from "../../Meal/Breakfast.js"
import Lunch from "../../Meal/Lunch.js"
import Dinner from "../../Meal/Dinner.js"
import {FaArrowCircleUp} from 'react-icons/fa';
import RightSidebar from '../RightSidebar'

function OrderAhead(props) {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {    
        if (window.pageYOffset > 400){
            setShowScroll(true)
        } else if (window.pageYOffset <= 400){
            setShowScroll(false)
        }  
     };


    const scrollTop = () => {
        setShowScroll(window.scrollTo({top: 0, behavior: 'smooth'}))
    };
        
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
    })

    return (
        <>
            <FaArrowCircleUp 
                className="scrollTop" 
                onClick={scrollTop} 
                style={{height: 40, display: showScroll ? 'flex' : 'none'}}
            />
            <div className="meal-types">
                <a href="#breakfast-meal" className="meal" >Breakfast</a>
                    
                <a href="#lunch-meal" className="meal" >Lunch</a>
                    
                <a href="#dinner-meal" className="meal" >Dinner</a>
                
            </div>

            <div className="order-ahead-page">
                <section>
                    <div id="breakfast-meal">
                        <>
                            <div className="meal-type">
                                Breakfast
                            </div>
                            <Breakfast viewHandler={props.viewHandler} schedule="order_ahead" />
                        </>
                    </div>
                    <div id="lunch-meal">
                        <>
                            <div className="meal-type">
                                Lunch
                            </div>
                            <Lunch viewHandler={props.viewHandler} schedule="order_ahead" />
                        </>
                    </div>
                    <div id="dinner-meal">
                        <>
                            <div className="meal-type">
                                Dinner
                            </div>
                            <Dinner viewHandler={props.viewHandler} schedule="order_ahead" />
                        </>
                    </div>
                </section>

            </div>

            <RightSidebar schedule="order_ahead"/>
        </>
    )
}


export default OrderAhead
