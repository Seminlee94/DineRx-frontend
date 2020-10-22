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

        // console.log(this.props.userOrders.filter(obj => console.log(obj.order.meal_types)))
        // console.log(this.props.userOrders.filter(obj => obj.meal_type==="lunch"))
        let breakfast_order = this.props.userOrders.filter(obj => obj.order.meal_types==="breakfast")
        let lunch_order = this.props.userOrders.filter(obj => obj.order.meal_types==="lunch")
        let dinner_order = this.props.userOrders.filter(obj => obj.order.meal_types==="dinner")


        console.log(breakfast_order)
        return(
            <div className="myorders-list">

                <div className="myorders-list-top">
                    My Current Orders
                </div>

                <div className="myorders-list-items">

                    <div className="myorders-ahead">
                        <div className="myorders-container">
                            <div className="myorders-container-top">
                                Order Ahead - Breakfast
                            </div>
                            {breakfast_order.length > 0

                            ?   
    
                                this.userOrder(1) 

                            :

                            <div className="myorders-empty">
                                You don't have any submitted order.
                            </div>


                            }
                        </div>

                        <div className="myorders-container">
                            <div className="myorders-container-top">
                                Order Ahead - Lunch
                            </div>
                                {lunch_order.length > 0

                                ?   

                                    this.userOrder(2) 

                                :

                                <div className="myorders-empty">
                                    You don't have any submitted order.
                                </div>


                                }
                        </div>

                        <div className="myorders-container">
                            <div className="myorders-container-top">
                                Order Ahead - Dinner
                            </div>
                                {dinner_order.length > 0

                                ?   

                                    this.userOrder(3) 

                                :

                                <div className="myorders-empty">
                                    You don't have any submitted order.
                                </div>


                                }
                            </div>
                        </div>
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