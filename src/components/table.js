import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { ReactTableDefaults } from "react-table";
import { connect } from 'react-redux';

class Table extends React.Component{
  
  render(){
    const pageSize =5;
    const {filterData} = this.props;
    this.state = {data: this.props.data};
    console.log("props", this.props)
    Object.assign(ReactTableDefaults, {
    showPagination: false,
    minRows: this.state.data.length
  });
    const columns = [{
    Header: 'First Name',
    accessor: 'fname',
    headerClassName: 'head'
  }, {
    Header: 'Last Name',
    accessor: 'lname',
    headerClassName: 'head'
  }, {    
    Header: 'Email',
    accessor: 'email',
    headerClassName: 'head'
  }]
    return(
      <div className="table-section">
      <ReactTable data={this.state.data} columns={columns}/>
      </div>
    )
  }
}
export default Table;
function mapStateToProps({filterData}) {
  return {
    data: filterData
  }
}
export default connect(mapStateToProps)(Table);