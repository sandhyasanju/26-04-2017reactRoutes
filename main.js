import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import { Route, hashHistory,     browserHistory, IndexRoute,BrowserRouter as Router } from 'react-router-dom';
// var ReactRouter = require("react-router");
// var Router = ReactRouter.Router;
// var hashHistory = ReactRouter.hashHistory;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;

import App from './App.js';
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";

render((
    <Router history = {hashHistory}>
    
      <Route component = {App} path="/user">
    <IndexRoute component = {Home} />
     <Route path = "/home" component = {Home} />
     <Route path = "/about" component = {About} />
     <Route path = "/contact" component = {Contact} />
        </Route>
  
    
   </Router>
), document.getElementById('app'));