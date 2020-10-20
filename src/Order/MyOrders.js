import React from 'react'
import { connect } from 'react-redux'
import { getUserOrder } from '../Redux/actions'
import MyOrderCard from './components/MyOrderCard'

let userId = localStorage.getItem("userId")

class MyOrders extends React.Component {

    componentDidMount(){
        this.props.getUserOrder()
    }

    userOrder = (order_id) => {
        let filtered = this.props.userOrders.filter((userFood => parseInt(userFood.user_id) === parseInt(userId) && userFood.order_id===order_id ))
        return filtered.map((obj) => ( <MyOrderCard key={obj.id} order={obj} />))
    }


    render() {


        return(
            <div className="myorders-list">

                <div className="myorders-list-top">
                    My Current Orders
                </div>

                <div className="myorders-list-items">
                    {this.props.userOrders.length > 0 

                    ? 
                        <div className="myorders-ahead">
                            <div className="myorders-container">
                                <div className="myorders-container-top">
                                    Order Ahead - Breakfast
                                </div>
                                {this.userOrder(1) }
                            </div>

                            <div className="myorders-container">
                                <div className="myorders-container-top">
                                    Order Ahead - Lunch
                                </div>
                                {this.userOrder(2) }
                            </div>

                            <div className="myorders-container">
                                <div className="myorders-container-top">
                                    Order Ahead - Dinner
                                </div>
                                {this.userOrder(3) }
                            </div>
                        </div>
                    
                    : 
                    
                    null}

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { userOrders: state.userOrders }
}

const mapDispatchToProps = (dispatch) => {
    return {getUserOrder: () => dispatch(getUserOrder())}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)