import React, { PureComponent } from 'react';

class MainBody extends PureComponent {
  onClickDemo=()=>{
    this.props.history.push('/?pagename=etc/iconstep')
  }

  render() {
    return (
      <div className="intro-icx-body-container">
        <section>
          <h1>HELLO ICX COMPONENT</h1>
          <h2 onClick={this.onClickDemo}>Enter Demo</h2>
        </section>
        <section>
          React-Icx-Component 
        </section>
      </div>
    );
  }
}

export default MainBody;