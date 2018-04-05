import React, { Component } from 'react';

class IconLoading extends Component {
  render() {
    const {label='처리중입니다.'} = this.props
    if(this.props.isShow === true){
      return (
        <div className="icon-loading-dim" >
          <div className="icon-loading-box">
            <div className="icon-loading-image">
              <div className="icon-loading-image-icon"></div>
              <div className="icon-loading-image-circle one"></div>
              <div className="icon-loading-image-circle two"></div>
            </div>
            <p className="icon-loading-text" dangerouslySetInnerHTML={{__html:label}}/>
          </div>
        </div>
      );
    }
    else {
      return null
    }
  }
}

export default IconLoading;