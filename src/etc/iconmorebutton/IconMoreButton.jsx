import React, { Component } from 'react';
import cn from 'classnames';

class IconMoreButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOn:false    
    }
  }

  onClickMenuButton=()=>{
    const {isOn} = this.state
    this.setState({
      isOn:!isOn
    })
  }

  onBlurMenu=()=>{
    this.setState({
      isOn:false
    })
  }

  getTypeStyle=()=>{
    const {type='right'} = this.props
    if(type === 'right'){
      return { right:0 }
    }
    else{
      return { left:0 }
    }
  }

  render() {
    const {isOn} = this.state;
    const getTypeStyle = this.getTypeStyle()
    return (
      <div className="icon-more-button-container">
        <div className={cn('icon-contract-more')} onClick={this.onClickMenuButton} tabIndex="1" onBlur={this.onBlurMenu} style={{outline:0}}>
          <div className={cn('icon-contract-more-btn',{'on':isOn})} style={getTypeStyle}>
          </div>
          <ul className="icon-contract-more-list" style={getTypeStyle}>
            {this.props.children}
          </ul>
          
        </div>
      </div>
    );
  }
}

export default IconMoreButton;