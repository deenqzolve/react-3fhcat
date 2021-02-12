import React from "react";
import "./style.css";
import Test from "./Test";
import Home from "./Home";
import Ids from "./Ids";
import Responce from "./Responce";
import Post from "./Post";
import Not from "./Not";
import Cart from "./Cart";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <ul className="nav nav-pills">
            <li className="nav-item">
          
              <NavLink className="nav-link" to="/" exact >Home</NavLink> 

             </li>
              <li className="nav-item">

              <NavLink className="nav-link" to="/Test">Test</NavLink> 

             </li>
            <li className="nav-item">

              <NavLink className="nav-link" to="/id/1">1</NavLink>

             </li>
            <li className="nav-item"> 

              <NavLink className="nav-link" to="/id/2">2</NavLink>

             </li>
            <li className="nav-item">

              <NavLink className="nav-link"  to="/responce"> Responce</NavLink>
           
                </li>
                 <li className="nav-item">

              <NavLink className="nav-link"  to="/post"> Post</NavLink>
           
                </li>

                 <li className="nav-item">

              <NavLink className="nav-link"  to="/cart"> Cart</NavLink>
           
                </li>
                <menu-system initially-hidden sticky>
  <menu-display>

    <shopper-button slot="button"></shopper-button>
    <shopper-cart></shopper-cart>

  </menu-display>
</menu-system>

                
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/id/:id" component={Ids} />
          <Route path="/responce" component={Responce} />
          <Route path="/post" component={Post} />
          <Route path="/cart" component={Cart} />
          <Route component={Not} />
        </Switch>
      </Router>
    </div>
  );
}
