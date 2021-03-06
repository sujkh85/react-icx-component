import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { containerStyles, inputStyles, buttonStyles } from './styles.js';

export default class PasswordMask extends Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onToggle: PropTypes.func,
    useVendorStyles: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    inputStyles: PropTypes.any,
    buttonStyles: PropTypes.any,
    showButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    hideButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ])
  }

  static defaultProps = {
    inputClassName: '',
    buttonClassName: '',
    placeholder: '',
    useVendorStyles: true,
    onChange() {},
    onBlur() {},
    onKeyDown() {}
  }

  state = {
    passwordShown: false,
    hasBeenFocused: false
  }

  invokeCallbacks(value, passwordShown) {
    const { onShow, onHide, onToggle } = this.props;

    if (onToggle) {
      onToggle(value);
    }

    if (onShow && passwordShown) {
      onShow(value);
    }

    if (onHide && !passwordShown) {
      onHide(value);
    }
  }

  focusVisibleInput() {
    const { passwordShown } = this.state;
    const visibleInput = passwordShown ? this.textInput : this.passwordInput;

    visibleInput.focus();
  }

  componentWillUpdate(nextProps, nextState) {
    const { passwordShown } = this.state;

    if (nextState.passwordShown !== passwordShown) {
      this.invokeCallbacks(nextProps.value, nextState.passwordShown);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { passwordShown, hasBeenFocused } = this.state;

    if (hasBeenFocused && prevState.passwordShown !== passwordShown) {
      this.focusVisibleInput();
    }
  }

  togglePasswordMask() {
    if(this.props.togglePasswordMask){
      this.props.togglePasswordMask(!this.state.passwordShown)
    }
    this.setState({ passwordShown: !this.state.passwordShown });
  }

  render() {
    const { id, name, className, inputClassName, buttonClassName, placeholder, autoFocus, minLength, maxLength, onChange, onBlur, onKeyDown, showButtonContent, hideButtonContent, useVendorStyles, readOnly, disabled, required, togglebuttonClassName="on" } = this.props;
    const { passwordShown } = this.state;
    const {value} = this.props;
    const vendorContainerCss = useVendorStyles ? containerStyles : {};
    const vendorInputCss = useVendorStyles ? inputStyles : {};
    const vendorButtonCss = useVendorStyles ? buttonStyles : {};

    return (
      <div
        className={className}
        style={vendorContainerCss}
      >
        <input
          type="password"
          ref={input => this.passwordInput = input}
          value={value}
          id={!passwordShown ? id : id+'password'}
          name={!passwordShown ? name : ''}
          className={inputClassName}
          placeholder={placeholder}
          autoFocus={autoFocus}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          required={required}
          style={{
            ...vendorInputCss,
            ...this.props.inputStyles,
            display: !passwordShown ? 'block' : 'none'
          }}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <input
          type="text"
          ref={input => this.textInput = input}
          value={value}
          id={passwordShown ? id : id+'text'}
          name={passwordShown ? name : ''}
          className={inputClassName}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          required={required}
          style={{
            ...vendorInputCss,
            ...this.props.inputStyles,
            display: passwordShown ? 'block' : 'none'
          }}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onFocus={() => this.setState({ hasBeenFocused: true })}
        />

        <a
          href=""
          className={cn(buttonClassName,{[togglebuttonClassName]:passwordShown})}
          style={{
            ...vendorButtonCss,
            ...this.props.buttonStyles
          }}
          onMouseDown={e => e.preventDefault()}
          onClick={e => {
            e.preventDefault();
            this.togglePasswordMask();
          }}
          tabIndex={-1}
        >
          {passwordShown ?
            hideButtonContent || 'Hide' :
            showButtonContent || 'Show'
          }
        </a>
        <div className="test"></div>
      </div>
    );
  }
}
