import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom"
import Login from "./Auth/Login"
import Home from "./Home/Home"
import OrderNow from './Order/OrderNow'
import OrderAhead from './Order/OrderAhead'
import Navbar from './Navbar/Navbar'
import Product from './Meal/Product'

function App() {


  
  return (

    <BrowserRouter>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/ordernow">
          <Navbar />
          <OrderNow/>
        </Route>

        <Route path="/orderahead">
          <Navbar/>
          <OrderAhead/>
        </Route>

        <Route path="/product/:id">
          <Navbar />
          <Product meal="123" />
        </Route>

        <Route exact path="/">

          <Home />
        </Route>

      </Switch>
    
    </BrowserRouter>
  );
}

export default withRouter(App);
