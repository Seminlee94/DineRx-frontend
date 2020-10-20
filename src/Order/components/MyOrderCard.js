import React from 'react'
import '../MyOrders.css'
import * as faIcons from "react-icons/fa"
import { connect } from 'react-redux'
import { deleteUserOrder } from '../../Redux/actions'

class MyOrderCard extends React.Component {

    deleteUserOrder = (id) => {
        this.props.deleteUserOrder(id)
    }

    
    render() {

        return (
            <div className="order-meal-card">
                <div className="order-time">
                    Will deliver by:  <h4>{this.props.order.time}</h4>
                </div>
                <div className="order-x">
                    <faIcons.FaRegTimesCircle onClick={() => this.deleteUserOrder(this.props.order.id)} />
                </div>

            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { deleteUserOrder: (id) => 
        dispatch(deleteUserOrder(id))}
}

export default connect(null, mapDispatchToProps)(MyOrderCard)
