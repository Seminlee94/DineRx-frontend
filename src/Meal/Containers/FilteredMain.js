import React from 'react'
import MealCard from '../Components/MealCard'


class FilteredMain extends React.Component {

    

        
    breakfast = () => {
        return this.props.meal.map(el => <MealCard key={el.id} meal={el} viewHandler={this.props.viewHandler}/>)
    }


    render() {

        return (
            <div className="breakfast-container">
                {this.breakfast()}
            </div>
    
        )
    }
}

export default FilteredMain
