import React from "react";
import axios from "axios";

import "react-flexy-table/dist/index.css";

import Table from "./Table";




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
      //console.log( response.data);
      this.setState({ posts: response.data });
      this.setState({ data: response });
    });
    
  }

  render() {
    // console.log(this.props);
    return (
      <div>
     

       
        <Table  data={this.state.posts}/>
      </div>
    );
  }
  componentdidMount() {
     $(document).ready(function () {
        $('#example').DataTable();
    });
  
  }
}



export default Responce;
