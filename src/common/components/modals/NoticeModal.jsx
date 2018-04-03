import React, { Component } from 'react';
import LayerPopup from '../../../library/layerpopup';

class NoticeModal extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e, type) {
    e.preventDefault();
    if('CLOSE' === type){
      let {callback, param} = this.props;
      let resultCallback = false;
      if (callback) {
        resultCallback = callback(type, param);
        if (resultCallback === undefined) {
          resultCallback = true;
        }
      } else{
        resultCallback = true;
      }
      if (resultCallback && this.props.layerKey) {
        LayerPopup.hide(this.props.layerKey);
      }
    }
    else if('XCLOSE' === type){
      if(this.props.layerKey){
        LayerPopup.hide(this.props.layerKey);
      }
    }

  }

  render() {
    let {title="title", message="message", buttonLabel='Confirm    ', type="text"} = this.props;
    return (
      <div className="popup-notice">
        <div className="popup-header">
          <div className="popup-header-title">
            {title}
          </div>
        </div>

          {type === 'html' && <div className="popup-body" >
            <div className="popup-text" dangerouslySetInnerHTML={{__html:message}}/>
          </div>}

          {type === 'text' && <div className="popup-body">
            <div className="popup-text">
              {message}
            </div>
          </div>}


        <div className="popup-footer">
          <button onClick={(e) => this.onClick(e, 'CLOSE')} className="button-style-main">{buttonLabel}</button>
        </div>
        
        <button  onClick={(e) => this.onClick(e, 'CLOSE')} className="popup-close">close</button>
       
      </div>
    );
  }
}

export default NoticeModal;
