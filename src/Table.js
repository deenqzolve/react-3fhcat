import React from "react";
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'

var $  = require( 'jquery' );
var dt = require( 'datatables.net' )();

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidlMount() {
    $(document).ready( function () {
    $('#example').DataTable();
} );
  }


  render() {
     console.log(this.props.data);
    return (
      <table className="table table-striped" id="example">
        <thead>
          <tr>
            <th> Id</th>
            <th>Title</th>
          </tr>
          </thead>
        <tbody>
        {this.props.data.map((itm, k) => {
            return (
              <tr>
                <td> {itm.id}</td>
                <td>{itm.title}</td>
              </tr>
            );
          })}
        </tbody>
          
        </table>
    );
  }
}
export default Table;