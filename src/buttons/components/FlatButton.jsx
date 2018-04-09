import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatStyle } from '../../style/components'

class FlatButton extends Component {

  onClickButton = (e) => {
    const { onClick } = this.props
    if(onClick){
      onClick(e)
    }
  }

  render() {
    const { label, icxStyle, disabled } = this.props
    return (
      <FlatStyle icxStyle={icxStyle} onClick={this.onClickButton} disabled={disabled}>
        <span>{label}</span>
      </FlatStyle>
    );
  }
}

FlatButton.propTypes = {
  icxStyle: PropTypes.oneOf(['default', 'primary', 'secondary', 'disabled']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

FlatButton.defaultProps = {
  icxStyle: 'default',
  label: '버튼 텍스트',
  disabled: false
}

export default FlatButton;