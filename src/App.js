import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom"
import Login from "./Auth/Login"
import Home from "./Home/Home"
import OrderNow from './Order/OrderNow'
import OrderAhead from './Order/OrderAhead'
import Navbar from './Navbar/Navbar'
import Product from './Meal/Product'

class App extends React.Component {

  state = {
    clickedId: null
  }

  viewHandler = (id) => {
    this.setState(() => ({ clickedId: id }))
  }


  render() {
    console.log(this.state)
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
              <OrderAhead viewHandler={this.viewHandler}/>
            </Route>
    
            <Route path="/product/:id">
              <Navbar />
              <Product clickedId={this.state.clickedId} />
            </Route>
    
            <Route exact path="/">
    
              <Home />
            </Route>
    
          </Switch>
        
        </BrowserRouter>
      );
  }
}

export default withRouter(App);
