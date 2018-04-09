import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainMenu from './MainMenu';
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style'
import styled from 'styled-components'

const MainContentContainer = styled.div`
  padding-top: 64px;
  min-height: 400px;
  padding-left: 256px;

  & .icon-body {
    margin: 48px 35px;
  }
`
class MainTemplete extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="icon-wrap">
          <MainHeader/>
          <MainMenu {...this.props}/>
          <MainContentContainer>
            <div className="icon-body">
              {this.props.children}
            </div>
          </MainContentContainer>
          {/* <div className="icon-body-container">
            <div className="icon-body">
              <div className="icon-content-container">
              </div>
            </div>
          </div> */}
          <MainFooter/>
        </div>
      </ThemeProvider>
    );
  }
}

export default MainTemplete;