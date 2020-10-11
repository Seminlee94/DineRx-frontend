import React from 'react'
import '../Meal.css'
import { Switch, Route, BrowserRouter, withRouter, Link } from "react-router-dom"
import Product from "../Product"
// import Card from "react-bootstrap/Card";

class MealCard extends React.Component {

    render() {

        // let meal_id = this.props.meal.id
    
        return(
            <>
                <div>
                    <div className="meal-card" >
                        <>
                            <a href="/product" component={<Product product={this.props.meal} />}  >
                                <img className="meal-card-image" src={this.props.meal.image} alt={this.props.meal.name} style={{ height:"220px", width: "200px" }} />
                            </a>
        
                        
                            <div className="meal-card-container">
                                <div className="meal-card-name">
                                    {this.props.meal.name}
                                </div>
                            </div>
                        </>
                    </div>
        
                </div>
            </>
    
        )
    }

}
// function MealCard(props) {

//     let meal_id = props.meal.id

//     return(

//         <div>
//             <div className="meal-card" >
//                 <>
//                     <a href={meal_id}>
//                         <img className="meal-card-image" src={props.meal.image} alt={props.meal.name} style={{ height:"220px", width: "200px" }} />
//                     </a>
 
                
//                     <div className="meal-card-container">
//                         <div className="meal-card-name">
//                             {props.meal.name}
//                         </div>
//                     </div>
//                 </>
//             </div>


//         </div>

//     )
// }
        
export default MealCard
        
