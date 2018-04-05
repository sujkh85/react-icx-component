import React, { Component } from 'react';

class ComponentTemplete extends Component {
  render() {
    return (
      <div className="icon-component-container">
        {this.props.children}
      </div>
    );
  }
}

export default ComponentTemplete;