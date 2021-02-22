import React from "react";
import axios from "axios";
import "./style.css";

import "react-flexy-table/dist/index.css";

import Table from "./Table";
import Tact from "./Tact";
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'



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
    console.log(this.state.posts);
     const additionalCols = [
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1613987381~hmac=da518cec92e38e07120355f9b622f49a"
              width='30'
              height='20'
              onClick={() => alert('this is delete for id ' + data.id)}
            />{' '}
           
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/565/565722.svg?token=exp=1613987426~hmac=3ffd6cf7451762bc743237d461fee5aa"
              width='30'
              height='20'
              onClick={() => alert('this is edit for id ' + data.id)}
            /> 
          </div>
        )
      }
    }
  ];
const columns = [
    
    {
      header: 'title',
      key: 'city',
      td: (data) => <div> {data.title}</div>
    }
    ,
    {
      header: 'Action',
      key: 'action',
      td: (data) => <Tact vid={data.id}/>
    }
  ];
   
    return (
      
      <div>
      
     <ReactFlexyTable data={this.state.posts} columns={columns}  additionalCols={additionalCols}  filterable nonFilterCols={["action"]}/>

       
       {/*<Table  data={this.state.posts}/>*/}
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
