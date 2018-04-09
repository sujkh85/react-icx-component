import React, { Component } from 'react';
import cn from 'classnames';
import styled from 'styled-components'
class MainMenuItem extends Component {
  render() {
    const {targetPageName, route="etc/iconstep", label} = this.props
    const MainMenuTab = styled.div.attrs({
      className: targetPageName === route && 'on',
      route,
      // onClick: (e) =>  this.props.onClickMenu
    })`
      padding: 15px;
      /* margin-left: 10px; */
      &.on {
        background-color: #eee;
      }
    `
    return (
      <div className={cn('contract-category')} >
        <div>
          {/* <div className={cn('contract-tab',{'on':targetPageName === route})} route={route} > */}
          <MainMenuTab onClick={(e) => { this.props.onClickMenu(e)}}>
            <span>
              {label}
            </span>
          </MainMenuTab>
        </div>
      </div>
    );
  }
}

export default MainMenuItem;