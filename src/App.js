import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import Login from "./Auth/Login"
import Home from "./Home/Home"

function App() {


  
  return (

    <BrowserRouter>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">

          <Home />
        </Route>

      </Switch>
    
    </BrowserRouter>
  );
}

export default withRouter(App);
