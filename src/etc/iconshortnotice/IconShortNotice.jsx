import React, { Component } from 'react';
import {ShortNoticeContainer} from 'react-short-notice';

class IconShortNotice extends Component {
  render() {
    const {timeout, id="empty", label='아이디를 입력해주세요.', style} = this.props
    return (
      <ShortNoticeContainer timeout={timeout} id={id}>
        {this.props.children}
        {this.props.children ? null:
        <em className="short-notice float-notice" style={style}>
          {label}
        </em>}
      </ShortNoticeContainer>
    );
  }
}

export default IconShortNotice;