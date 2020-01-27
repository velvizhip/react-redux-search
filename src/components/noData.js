import React, {Component} from 'react';
import LifecycleHooks from './lifecycleHooks';

class NoData extends React.Component{
  render(){
    return(
      <div className="nodata-section">
      No Data Found. Click on the * to display table
      <LifecycleHooks />
      </div>
    )
  }
}
export default NoData;