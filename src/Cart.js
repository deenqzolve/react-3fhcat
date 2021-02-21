import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/">
          {"<< "}To Home
        </Link>
        <h1>Cart</h1>
      </div>
    );
  }
}

export default Cart;
