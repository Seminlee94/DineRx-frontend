import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserOrder } from '../Redux/actions'
import MyOrderCard from './components/MyOrderCard'

let userId = localStorage.getItem("userId")

function MyOrders(props) {
    
    useEffect(() => {
        props.getUserOrder()
    })

    const userOrder = (order_id) => {
        let filtered = props.userOrders.filter((userFood => parseInt(userFood.user_id) === parseInt(userId) && userFood.order_id===order_id ))
        return filtered.map((obj) => ( <MyOrderCard key={obj.id} order={obj} />))
    }

    let breakfast_order = props.userOrders.filter(obj => obj.order.meal_types==="breakfast")
    let lunch_order = props.userOrders.filter(obj => obj.order.meal_types==="lunch")
    let dinner_order = props.userOrders.filter(obj => obj.order.meal_types==="dinner")

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
                                    userOrder(1) 
                                :
                                    <div className="myorders-empty">
                                        You don`t have any submitted order.
                                    </div>
                            }
                    </div>

                    <div className="myorders-container">
                        <div className="myorders-container-top">
                            Order Ahead - Lunch
                        </div>
                            {lunch_order.length > 0

                                ?   
                                    userOrder(2) 
                                :
                                    <div className="myorders-empty">
                                        You don`t have any submitted order.
                                    </div>
                            }
                    </div>

                    <div className="myorders-container">
                        <div className="myorders-container-top">
                            Order Ahead - Dinner
                        </div>
                                {dinner_order.length > 0

                                ?   
                                    userOrder(3) 
                                :

                                    <div className="myorders-empty">
                                        You don`t have any submitted order.
                                    </div>
                                }
                        </div>
                    </div>
            </div>

        </div>
    )
}
// }

const mapStateToProps = (state) => {
    return { userOrders: state.userOrders }
}

const mapDispatchToProps = (dispatch) => {
    return {getUserOrder: () => dispatch(getUserOrder())}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)