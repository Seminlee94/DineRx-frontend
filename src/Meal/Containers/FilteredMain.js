import React from 'react'
import MealCard from '../Components/MealCard'

function FilteredMain(props) {
        
    const breakfast = () => {
        return props.meal.map(el => <MealCard key={el.id} meal={el} viewHandler={props.viewHandler}/>)
    }

    return (
        <div className="breakfast-container">
            {breakfast()}
        </div>

    )
}

export default FilteredMain
