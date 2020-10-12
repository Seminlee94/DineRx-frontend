import React, { useState } from 'react'
import '../Meal.css'
import { Link } from "react-router-dom"
import { FiCheck } from 'react-icons/fi'
import { FcCheckmark } from 'react-icons/fc'


function MealCard(props) {

    const [toggleState, setToggleState] = useState(false);

    function toggle() {
      setToggleState(toggleState ? false : true);
    }

    let meal_id = props.meal.id

    return(

        <div className="meal-card" >
            <>
                <div className="meal-card-image-container">
                    <div className="meal-check" onClick={toggle}>
                        {toggleState ? <FcCheckmark />: <FiCheck /> }
                    </div>
                    <Link to={{ pathname: `product/${meal_id}`,
                                state: { id: meal_id }
                            }} >
                        <img className="meal-card-image" src={props.meal.image} alt={props.meal.name} style={{ height:"220px", width: "200px" }} />
                    </Link>    
                </div>
            
                <div className="meal-card-container">
                    <div className="meal-card-name">
                        {props.meal.name}
                    </div>
                </div>
            </>
        </div>



    )
}
        
export default MealCard
        
