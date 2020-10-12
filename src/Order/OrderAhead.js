import React from "react";
import './OrderAhead.css'
import Breakfast from "../Meal/Breakfast.js"
import Lunch from "../Meal/Lunch.js"
import Dinner from "../Meal/Dinner.js"
import {FaArrowCircleUp} from 'react-icons/fa';
import RightSidebar from './RightSidebar'


class OrderAhead extends React.Component {

    state = {
        showScroll: false,
    }
    

    checkScrollTop = () => {    
        if (window.pageYOffset > 400){
            this.setState({ showScroll: true })
        } else if (window.pageYOffset <= 400){
           this.setState({ showScroll: false })
        }  
     };


    scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
        
    componentDidMount() {
        window.addEventListener('scroll', this.checkScrollTop);
    }

    render() {
        return (
            <>
                <FaArrowCircleUp 
                    className="scrollTop" 
                    onClick={this.scrollTop} 
                    style={{height: 40, display: this.state.showScroll ? 'flex' : 'none'}}
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
                                <Breakfast />
                            </>
                        </div>
                        <div id="lunch-meal">
                            <>
                                <div className="meal-type">
                                    Lunch
                                </div>
                                <Lunch />
                            </>
                        </div>
                        <div id="dinner-meal">
                            <>
                                <div className="meal-type">
                                    Dinner
                                </div>
                                <Dinner />
                            </>
                        </div>
                    </section>

                </div>

                <RightSidebar />


            </>
        )
    }

}


export default OrderAhead
