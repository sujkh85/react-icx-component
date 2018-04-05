import React, { Component } from 'react';

class DescriptionTemplete extends Component {
  render() {
    return (
      <div className="icon-description-container">
        <div className="icon-description-title">
          Description
        </div>
        <div className="icon-description-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DescriptionTemplete;