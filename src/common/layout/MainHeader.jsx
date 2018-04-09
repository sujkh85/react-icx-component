import React from 'react';
import styled from 'styled-components'

const Header = styled.div`
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(0, 188, 212);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  position: fixed;
  z-index: 1101;
  width: 100%;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
`

const H1 = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px;
  padding-top: 0px;
  letter-spacing: 0px;
  font-size: 24px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  height: 64px;
  line-height: 64px;
  flex: 1 1 0%;
`
export default ()=>{
  return(
    <Header>
      <H1>REACT-ICX-COMPONENT</H1>
    </Header>
  )
}