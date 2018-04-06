import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainMenu from './MainMenu';
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style'

class MainTemplete extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="icon-wrap">
          <MainHeader/>
          <div className="icon-body-container">
            <div className="icon-body">
              <MainMenu {...this.props}/>
              <div className="icon-content-container">
                {this.props.children}
              </div>
            </div>
          </div>
          <MainFooter/>
        </div>
      </ThemeProvider>
    );
  }
}

export default MainTemplete;