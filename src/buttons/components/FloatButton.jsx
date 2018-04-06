import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { FloatStyle } from '../../style/components';

// const FloatStyle = styled(Button) `
//   background: mediumblue;
//   color: white;
//   &:hover {
//     background-color: rgba(255,255,255,1);
//   }
// `
const FloatWrap = styled.div `
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  display: inline-block;
  min-width: 88px;
  margin: 12px;

  /* &:hover {
    background-color: rgba(255,255,255,.4)
  } */

  & .inner {
    height: 36px;
    border-radius: 2px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    top: 0px;
    &:hover {
      background-color: rgba(255,255,255,.4)
    }
  }
`

class FlatButton extends Component {
  render() {
    const { label, bsStyle } = this.props
    return (
      <FloatWrap>
        <FloatStyle bsStyle={bsStyle}>
          <div>
            <div className="inner">
              <span>{label}</span>
            </div>
          </div>
        </FloatStyle>
      </FloatWrap>
    );
  }
}

FlatButton.propTypes = {
  bsStyle: PropTypes.oneOf(['default', 'primary', 'secondary', 'disabled'])
}

FlatButton.defaultProps = {
  bsStyle: 'default',
  label: '버튼 텍스트'
}

export default FlatButton;