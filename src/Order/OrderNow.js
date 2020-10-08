import  React, { useState } from "react";
import "./OrderNow.css";
// import { Alert, Dropdown } from 'rsuite';
// import { render } from "react-dom";
import 'rsuite/lib/styles/index.less'
import * as faIcons from "react-icons/fa"
import Breakfast from "../Meal/Breakfast"
import Lunch from "../Meal/Lunch"
import Dinner from "../Meal/Dinner"
import breakfastImg from '../asset/images/breakfastImg.jpg'
import breakfastImg2 from '../asset/images/breakfastImg2.jpg'
import lunchImg from '../asset/images/lunchImg.jpg'
import lunchImg2 from '../asset/images/lunchImg2.jpg'
import dinnerImg from '../asset/images/dinnerImg.jpg'
import dinnerImg2 from '../asset/images/dinnerImg2.jpg'
import dinnerImg3 from '../asset/images/dinnerImg3.jpg'
import TimeOut from "./TimeOut"



function OrderNow() {
    let time = new Date().toLocaleTimeString('en-GB')

    const[attentionClicked, setattentionClicked] = useState(false)
    const promptHandler = () => setattentionClicked(!attentionClicked);


    const [Ctime, setCtime] = useState(time)
    const updateTime = () => {
        time = new Date().toLocaleTimeString('en-GB')
        setCtime(time)
    }
    
    setInterval(updateTime, 1000)


    let noSecond = time.split(":")
    const date = new Date().toLocaleDateString()
    const day = new Date().toLocaleString('en-us', {weekday:'long'})
    const breakfast = noSecond[0] > 7 && noSecond[0] < 11
    const lunch = noSecond[0] > 12 && noSecond[0] < 16
    const dinner = noSecond[0] > 17 && noSecond[0] < 21
    const TimeOut = (breakfast === false && lunch === false && dinner === false)


    return (
        <>
            {attentionClicked ? 
                <>
                    <>
                        { dinner ?
                            <>
                                <div className="ordernow-top">
                                    <img
                                        className="meal-pic"
                                        src={dinnerImg3}
                                        style= {{ width:"100%", height:"40vh"}}
                                    />
                                    <div className="ordernow-top-date" style={{ color: "#F7E6E6" }}>
                                        <div className="ordernow-date-and-day">
                                            <div className="ordernow-date">
                                                {date}
                                            </div>
                                            <div className="ordernow-day">
                                                ({day.split("").slice(0,3)})
                                            </div>
                                        </div>
                                        <div className="ordernow-time">
                                            {noSecond[0]}:{noSecond[1]}
                                        </div>
           
                                    </div>
                                    
                                </div>

                                <Dinner />
                            </>

                            :

                            null
                        }
                    </>

                    <>
                        { lunch ?
                            <>
                                <div className="ordernow-top">
                                    <img 
                                        className="meal-pic"
                                        src={lunchImg2}
                                        style= {{ width:"100%", height:"40vh"}}
                                    />
                                    <div className="lunch-ordernow-top-date" style={{ color: "#642A02" }} >
                                        <div className="lunch-ordernow-date-and-day">
                                            <div className="lunch-ordernow-date">
                                                {date}
                                            </div>
                                            <div className="lunch-ordernow-day">
                                                ({day.split("").slice(0,3)})
                                            </div>
                                        </div>
                                        <div className="lunch-ordernow-time">
                                            {noSecond[0]}:{noSecond[1]}
                                        </div>
                                            
                                    </div>
                                    
                                </div>

                                <Lunch />
                            </>

                            :

                            null
                        }
                    </>

                    <>
                        { breakfast ?
                            <>
                                <div className="ordernow-top">
                                    <img 
                                        className="meal-pic"
                                        src={breakfastImg2}
                                        style= {{ width:"100%", height:"40vh"}}
                                    />
                                    <div className="breakfast-ordernow-top-date" style={{ color: "coral" }} >
                                            <div className="breakfast-ordernow-date">
                                                {date}
                                            </div>
                                            <div className="breakfast-ordernow-day">
                                                ({day.split("").slice(0,3)})
                                            </div>
                                            <div className="breakfast-ordernow-time">
                                                {noSecond[0]}:{noSecond[1]}
                                            </div>
                            
                                    </div>
                                    
                                </div>

                                <Breakfast />
                            </>

                            :

                            null
                        }
                    </>

                    <> 
                        { TimeOut ? 
                            <>

                                <div className="timeout-time" >
                                    <div className="ordernow-date-and-day">
                                        <div className="ordernow-date">
                                            {date}
                                        </div>
                                        <div className="ordernow-day">
                                            ({day.split("").slice(0,3)})
                                        </div>
                                    </div>
                                    <div className="ordernow-time">
                                        {noSecond[0]}:{noSecond[1]}
                                    </div>
                                </div>
                                <div className="timeout-prompt">
                                    The cafeteria is closed at this hour. Would you like to order for tomorrow's meal? If so, please press Shop Ahead
                                </div>


                            </>

                            :

                            null
                            
                        }
                    </>
                </>

            :

    
                <div className="attention-unclicked">
                    <div className="attention-prompt">
                        <div className="prompt-x" onClick={promptHandler} >
                            <faIcons.FaRegTimesCircle />
                        </div>
                        <div className="prompt-string">
                            Please check your information by hovering over the items before continuing 
                        </div>
                        <div className="prompt-bottom">
                            If information is incorrect, please contact your nurse
                        </div>
                    </div>
                </div>
            }
        </>

    )

}


export default OrderNow
