import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import rootReducer from './Redux/reducer'



const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App  />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

