import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../Redux/actions'
import RightSideItemCard from './RightSideItemCard'
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

let user_id = localStorage.getItem("userId")

class RightSideItem extends React.Component {

    componentDidMount(){
        this.props.fetchUser();
    }
    

    // userFoods = () => {
        //     return this.props.userFoods.map(el => <RightSideItemCard key={el.id} meal={el} />)
        // }
        
    render(){

        let newArray = this.props.userFoods
        let breakfastFiltered = newArray.filter(el => el.breakfast)
        let lunchFiltered = newArray.filter(el => el.lunch)
        let dinnerFiltered = newArray.filter(el => el.dinner)


        const ShopMapper = [
            { title: "Breakfast", mealType: breakfastFiltered },
            { title: "Lunch", mealType: lunchFiltered },
            { title: "Dinner", mealType: dinnerFiltered },

          ];
      
          const ShopMap = ShopMapper.map(({ title, mealType }) => (
            <Accordion style={{ marginTop: "5px", marginLeft: "5px" }}>
              <Card style={{ border: 0, marginBottom: "5px" }}>
                <Accordion.Toggle
                  as={Button}
                  variant="secondary"
                  eventKey="0"
                  style={{ textAlign: "left" }}
                >
                  {title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <ListGroup>
                    {mealType.map((item) => (
                      <ListGroup.Item
                        key={item.id}
                        style={{ cursor: "pointer" }}
                      >
                        {console.log(item)}
                      </ListGroup.Item>
                        // <RightSideItemCard key={item.id} meal={item} />
                    ))}
                  </ListGroup>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ));
        
            return(
                <div className="cart-container">
                    <div className="cart-container-top">
                        Cart
                    </div>
                    {/* {this.userFoods()} */}
                    {ShopMap}
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return { userFoods: state.userFoods }
} 

const mapDispatchToProps = (dispatch) => {
    return { fetchUser: () => dispatch(getUser(user_id))}
}


export default connect(mapStateToProps, mapDispatchToProps)(RightSideItem)
