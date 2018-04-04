import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainMenu from './MainMenu';

class MainTemplete extends Component {
  render() {
    return (
      <div className="icon-wrap">
        <MainHeader/>
        <div className="icon-body">
          <MainMenu/>
          <div className="icon-content-container">
            {this.props.children}
          </div>
        </div>
        <MainFooter/>
      </div>
    );
  }
}

export default MainTemplete;