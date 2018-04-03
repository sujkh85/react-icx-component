import React, { Component } from 'react';
import LayerPopup from '../../../library/layerpopup';

class ConfirmModal extends Component {
  onClickButton=(e, type)=> {
    e.preventDefault();
    let {callback, param} = this.props;
    let resultCallback = false;
    if (callback) {
      resultCallback = callback(type, param);
      if (resultCallback === undefined) {
        resultCallback = true;
      }
    } else {
      resultCallback = true;
    }
    if (resultCallback && this.props.layerKey) {
			LayerPopup.hide(this.props.layerKey);
		}
  }

  render() {
    let {title="title", message="message", type="text", leftLabel="cancel", rightLabel="confirm"} = this.props;
    return (
      <div className="popup-confirm">
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
          <button onClick={(e) => this.onClickButton(e, 'LEFT')} className="button-style-main-gray">{leftLabel}</button>
          <button onClick={(e) => this.onClickButton(e, 'RIGHT')} className="button-style-main">{rightLabel}</button>
        </div>
        <button  onClick={(e) => this.onClickButton(e, 'CLOSE')} className="popup-close">close</button>
      </div>
    );
  }
}

export default ConfirmModal;