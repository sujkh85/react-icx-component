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

class FloatButton extends Component {

  onClickButton = (e) => {
    const {onClick} = this.props
    console.log(e.target)
    if(onClick){
      onClick(e)
    }
  }

  render() {
    const { label, icxStyle, disabled, target, } = this.props
    
    return (
      <FloatWrap>
        <FloatStyle icxStyle={icxStyle} onClick={this.onClickButton} disabled={disabled} target={target}>
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

FloatButton.propTypes = {
  icxStyle: PropTypes.oneOf(['default', 'primary', 'secondary', 'disabled']),
  label: PropTypes.string,
  disabled: PropTypes.bool
}

FloatButton.defaultProps = {
  icxStyle: 'default',
  label: '버튼 텍스트',
  disabled: false
}

export default FloatButton;