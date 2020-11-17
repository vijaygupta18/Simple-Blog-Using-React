import React, { createContext, useEffect, useState } from 'react';
import './index.css';
import Axios from 'axios';
import {Route,Switch,NavLink,useParams, useLocation,Redirect} from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Services from './Services';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';

const App=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/services" component={Services}/>
        <Redirect to='/'/>
        </Switch>
        </>
    );
};



export default App;
