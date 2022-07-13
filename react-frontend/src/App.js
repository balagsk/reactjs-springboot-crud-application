import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListOrderComponent from './components/ListOrderComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateOrderComponent from './components/CreateOrderComponent';
import UpdateOrderComponent from './components/UpdateOrderComponent';
import ViewOrderComponent from './components/ViewOrderComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListOrderComponent}></Route>
                          <Route path = "/orders" component = {ListOrderComponent}></Route>
                          <Route path = "/add-orders/:id" component = {CreateOrderComponent}></Route>
                          <Route path = "/view-orders/:id" component = {ViewOrderComponent}></Route>
                          { <Route path = "/update-employee/:id" component = {UpdateOrderComponent}></Route> }
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
