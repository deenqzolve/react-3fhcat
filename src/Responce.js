import React from "react";
import axios from "axios";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import { MDBDataTable } from 'mdbreact';

class Responce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      data: []
    };
  }

  componentWillMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      // handle success
      console.log( response.data);
      this.setState({ posts: response.data });
      this.setState({ data: response });
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <MDBDataTable data="https://jsonplaceholder.typicode.com/posts" />

        <table className="table table-striped">
        <thead>
          <tr>
            <th> Id</th>
            <th>Title</th>
          </tr>
          </thead>
          {this.state.posts.map((itm, k) => {
            return (
              <tr>
                <td> {itm.id}</td>
                <td>{itm.title}</td>
              </tr>
            );
          })}
          
        </table>
      </div>
    );
  }
}

export default Responce;
