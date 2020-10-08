import React, { useState } from "react";
import './OrderAhead.css'
import Breakfast from "../Meal/Breakfast.js"
import Lunch from "../Meal/Lunch.js"
import Dinner from "../Meal/Dinner.js"
import {FaArrowCircleUp} from 'react-icons/fa';


function OrderAhead() {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {    
        if (!showScroll && window.pageYOffset > 400){
           setShowScroll(true)    
        } else if (showScroll && window.pageYOffset <= 400){
           setShowScroll(false)    
        }  
     };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
        
    window.addEventListener('scroll', checkScrollTop)

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

            <section>

                <div id="breakfast-meal">
                    <Breakfast />
                </div>
                <div id="lunch-meal">
                    <Lunch />
                </div>
                <div id="dinner-meal">
                    <Dinner />
                </div>
            </section>
        </>
    )
}


export default OrderAhead
