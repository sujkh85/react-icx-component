import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';

class IconClipBoard extends Component {
  onSuccess=(e)=>{
    if(this.props.onSuccess){
      this.props.onSuccess(e)
    }
  }

  getText=()=>{
    const {text="empty copy"} = this.props
    return text;
  }

  render() {
    const {className="button-in-input button-style-copy"} = this.props
    return (
      <Clipboard option-text={this.getText} onSuccess={this.onSuccess} className={className}>
        copy to clipboard
      </Clipboard>
    );
  }
}

export default IconClipBoard;