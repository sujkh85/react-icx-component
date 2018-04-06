import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatStyle } from '../../style/components'

class FlatButton extends Component {
  render() {
    const { label, bsStyle } = this.props
    return (
      <FlatStyle bsStyle={bsStyle}>
        <span>{label}</span>
      </FlatStyle>
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