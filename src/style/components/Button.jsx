import styled from 'styled-components';
import color from '../color'

const Button = styled.button`
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  outline: none;
  font-size: inherit;
  font-weight: inherit;
  position: relative;
  height: 36px;
  line-height: 36px;
  min-width: 88px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  border-radius: 2px;
  user-select: none;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
`

export const FlatStyle = styled(Button)`
  ${props => props.theme ? props.theme.color[props.icxStyle] : color[props.icxStyle].color}
  & > span {
    position: relative;
    padding-left: 16px;
    padding-right: 16px;
    letter-spacing: 0px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
  }
  &:hover {
    background-color: rgba(153,153,153,0.2)
  }

  &:disabled,
  &[disabled]{
    cursor: not-allowed;
  }
`

export const FloatStyle = styled(Button)`
  ${
    props => props.theme ?
    props.theme.bg[props.icxStyle] :
    color[props.icxStyle].backgroundColor
  }
  color: ${props => props.icxStyle !== 'default' && '#fff'};

  &:disabled,
  &[disabled]{
    cursor: not-allowed;
  }
`


