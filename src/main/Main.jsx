import React from 'react';
import Popup from '../common/Popup'
import {ShortNoticeContainer, ShortNoticeController} from 'react-short-notice';

class Main extends React.PureComponent {
  noticePopup=()=>{
    Popup.noticeModal({
      title:'your title', message:'your message',
      callback:()=>{
        console.log('done')
      }
    })
  }

  confirmPopup=()=>{
    Popup.confirmModal({
      title:'your title', message:'your message',
      callback:(type)=>{
        if(type === 'RIGHT'){
          console.log('confirm')
        }
        else if(type === 'LEFT'){
          console.log('cancel')
        }
      }
    })
  }

  onClickMoveMain2=()=>{
    this.props.history.push('/?pagename=main/main2')
  }

  onClickShortNotice=()=>{
    ShortNoticeController.show('testShortNotice')
  }

  render() {  
    return (
      <div>
        Main
        <div onClick={this.noticePopup}>Notice Popup</div>
        <div onClick={this.confirmPopup}>Confirm Popup</div>
        <div onClick={this.onClickMoveMain2}>move main2</div>
        <div onClick={this.onClickShortNotice}>shortNotice</div>
        <ShortNoticeContainer id="testShortNotice" timeout='2000'>
          <div>2s after hide</div>
        </ShortNoticeContainer>
      </div>
    );
  }
}

export default Main;