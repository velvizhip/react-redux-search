import React, {Component} from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className='header'>
      <span className="logo"> &#x2654; </span>
      <span>Search Customer</span>
      </div>
    )
  }
}
export default Header;