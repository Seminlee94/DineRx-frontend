import React from 'react'
import '../Meal.css'
import { Switch, Route, BrowserRouter, withRouter, Link} from "react-router-dom"
import Navbar from "../../Navbar/Navbar"
import Product from "../Product"

// class MealCard extends React.Component {


    
//     render() {
        
//         let meal_id = this.props.meal.id
              
//         // let newTo = { 
//         //     pathname: `/product/${meal_id}`, 
//         //     param1: meal_id
//         // };

    
//         return(
//             <>
//                 <div>
//                     <div className="meal-card" >
//                         <>
//                             <Link to={`product/${meal_id}`} >
//                                 <img 
//                                     className="meal-card-image" 
//                                     src={this.props.meal.image} 
//                                     alt={this.props.meal.name} 
//                                     style={{ height:"220px", width: "200px" }} 
//                                 />
//                             </Link>


        
                        
//                             <div className="meal-card-container">
//                                 <div className="meal-card-name">
//                                     {this.props.meal.name}
//                                 </div>
//                             </div>
//                         </>

//                     </div>
//                 </div>

//             </>
    
//         )
//     }
// }

function MealCard(props) {


    let meal_id = props.meal.id


    const newTo = { 
        pathname: `/product/${meal_id}`, 
        param1: meal_id
      };

    return(
        <>
        <div>
            <div className="meal-card" >
                <>
                    <Link to={newTo} >
                        <img className="meal-card-image" src={props.meal.image} alt={props.meal.name} style={{ height:"220px", width: "200px" }} />
                    </Link>
                
                    <div className="meal-card-container">
                        <div className="meal-card-name">
                            {props.meal.name}
                        </div>
                    </div>
                </>
            </div>


        </div>

        {/* <Switch>
            <Route path="/product/:id" component={<Product/> } />
        </Switch> */}
        </>

    )
}
        
export default MealCard
        
