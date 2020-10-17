import React from 'react'
import "./Cart.css"
import * as faIcons from "react-icons/fa"
import { connect } from 'react-redux'
import { deleteUserFood } from '../../Redux/actions'



class RightSideItemCard extends React.Component {

    deleteUserFood = (id) => {
        this.props.deleteUserFood(id)
    }


    render() {
        return(
            <div className="item-card" >
                    
                    <img className="meal-card-image" src={this.props.meal.image} alt={this.props.meal.name} style={{ height:"50px", width: "50px" }} />
                    <div className="meal-card-name">
                        {this.props.meal.name}
                    </div>
                    <div className="meal-card-icon" onClick={() => this.deleteUserFood(this.props.userFood_id)}>
                        <faIcons.FaRegTimesCircle />
                    </div>
    
            </div>
    
    
    
        )
    }
}

const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
} 
        
const mapDispatchToProps = (dispatch) => {
    return { deleteUserFood: (id) => 
        dispatch(deleteUserFood(id))}
}


export default connect(mapStateToProps, mapDispatchToProps)(RightSideItemCard)