import React, { useState, useEffect } from 'react'
import './OrderAhead.css'
import RightSideItem from './Cart/RightSideItem'

function RightSidebarNow(props) {

    const [showSide, setShowSide] = useState(false)

    const checkScrollTop = () => {    
        if (window.pageYOffset > 600){
            setShowSide(true)
        } else if (window.pageYOffset <= 600){
            setShowSide(false)
        }  
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
    })

    return (
        <div className={showSide ? "right-sidebar" : "right-sidebar-inactive"}>
            <RightSideItem schedule={props.schedule} />
        </div>
    )
}



export default RightSidebarNow