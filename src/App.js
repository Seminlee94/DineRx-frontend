import React, { useState } from 'react'
import './App.css'
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom"
import Login from "./Auth/Login"
import Home from "./Home/Home"
import OrderNow from './Order/OrderNow'
import OrderAhead from './Order/OrderAhead'
import Navbar from './Navbar/Navbar'
import Product from './Meal/Product'
import Cart from './Order/Cart/Cart'
import MyOrders from './Order/MyOrders'
import DietSide from './Diet/DietSide'
import DietRecommendation from './Diet/containers/DietRecommendation'
import DietEducation from './Diet/containers/DietEducation'
import DietAllergies from './Diet/containers/DietAllergies'
import DietAbout from './Diet/containers/DietAbout'

function App() {

  let userDiet = localStorage.getItem("diet")
  const [clickedId, setClickedId] = useState(null)


  const viewHandler = (id) => {
    setClickedId(id)
  }

  return (

    <BrowserRouter>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/myorders">
          <Navbar />
          <MyOrders />
        </Route>

        <Route path="/ordernow">
          <Navbar />
          <OrderNow viewHandler={viewHandler} />
        </Route>

        <Route path="/orderahead">
          <Navbar/>
          <OrderAhead viewHandler={viewHandler}/>
        </Route>

        <Route path="/product/:id">
          <Navbar />
          <Product clickedId={clickedId} />
        </Route>

        <Route path="/diet">
          <Navbar/>
          <DietSide />
        </Route>

        <Route exact path={`/about/${userDiet}`} >
          <Navbar />
          <DietAbout />
        </Route>

        <Route exact path="/allergies" >
          <Navbar />
          <DietAllergies />
        </Route>

        <Route exact path="/edu_diets" >
          <Navbar />
          <DietEducation />
        </Route>

        <Route exact path="/eat_healthy" >
          <Navbar />
          <DietSide />
        </Route>

        <Route exact path="/recommendation" >
          <Navbar />
          <DietRecommendation />
        </Route>

        <Route exact path="/qna" >
          <Navbar />
          <DietSide />
        </Route>

        <Route path="/cart" >
          <Navbar />
          <Cart viewHandler={viewHandler}/>
        </Route>

        <Route exact path="/">

          <Home />
        </Route>

      </Switch>
    
    </BrowserRouter>
  );
}


export default withRouter(App);
