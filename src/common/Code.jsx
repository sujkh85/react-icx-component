import React, { Component } from 'react';

class Code extends Component {
  render() {
    return (
      <div className="icon-code-container">
        {this.props.children}
      </div>
    );
  }
}

export default Code;