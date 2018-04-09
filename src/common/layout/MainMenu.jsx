import React, { PureComponent } from 'react';
// import cn from 'classnames';
import { withRouter } from 'react-router';
import MainMenuItem from './MainMenuItem'
import styled from 'styled-components'

const MainMenuContainer = styled.div`
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
  border-radius: 0px;
  height: 100%;
  width: 256px;
  position: fixed;
  z-index: 1200;
  left: 0px;
  top: 64px;
  transform: translate(0px, 0px);
  overflow: auto;
`
class MainMenu extends PureComponent {
  onClickMenu=(e)=>{
    let targetPageName = this.props.location.query.pagename
    let route = e.currentTarget.getAttribute('route')
    if(route !== targetPageName){
      this.props.history.push(`/?pagename=${route}`)
    }
  }
  render() {
    let targetPageName = this.props.location.query.pagename
    return (
      <MainMenuContainer>
        <MainMenuItem label="Step" route="etc/iconstep" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
        <MainMenuItem label="Loading" route="etc/iconloading" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
        <MainMenuItem label="ShortNotice" route="etc/iconshortnotice" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
        <MainMenuItem label="Buttons" route="button/button" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
        <MainMenuItem label="CountDown" route="etc/iconcountdown" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
      </MainMenuContainer>
    );
  }
}

export default withRouter(MainMenu);