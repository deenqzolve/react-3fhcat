import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

class Not extends React.Component {
  render() {
    return <div>
          <h1>404</h1>
          <p>Page Not Found</p>
          <Link to="/" className="btn btn-info">Go to Gome</Link>
    </div>;
  }
}
export default Not;
