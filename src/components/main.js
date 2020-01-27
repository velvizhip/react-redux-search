import React, {Component} from 'react';
import Table from './table';
import NoData from './noData';
import CustomerList from './helper';
import { search } from '../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LifecycleHooks from './lifecycleHooks';

class Main extends React.Component{
  constructor(){
    super();
    this.state = {'searchTxt': '', data: []};
    //this.starClick = this.starClick.bind(this);
  }
  starClick = () => {
    this.props.search('');
  }
  render(){
    const {search, value, filterData} = this.props;
    console.log("filterData", filterData.length);
    return(
      <div>
      <div className="search-form">
      <div>
        <h3>Search topic</h3>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); search(this.state.searchTxt)}}>
        <div className="form-group">
        <input type="text" value={this.state.searchTxt} onChange={(e) => this.setState({'searchTxt': e.target.value})} value={value} />
        <button type='submit'>Search</button>
        <span className="star" onClick={this.starClick}>*</span>
        </div>
        </form>
      </div>
      {filterData.length ? <Table/> : <NoData />} 
      </div>
    )
  }
}
function mapStateToProps({filterData}) {
  return {value: filterData.value, filterData: filterData};
}

const mapDispatchToProps = (dispatch) => {
  //return bindActionCreators({search}, dispatch);
  return {
    search : (data) => dispatch(search(data))
  }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);