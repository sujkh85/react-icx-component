import React, { Component } from 'react';
import cn from 'classnames';
import styled from 'styled-components'
class MainMenuItem extends Component {
  render() {
    const {targetPageName, route="etc/iconstep", label} = this.props
    const MainMenuTab = styled.div.attrs({
      className: targetPageName === route && 'on',
      route
    })`

      padding: 15px;
      /* margin-left: 10px; */
      &.on {
        background-color: #eee;
      }


    `
    return (
      <div className={cn('contract-category')} route={route} onClick={this.props.onClickMenu}>
        <div>
          {/* <div className={cn('contract-tab',{'on':targetPageName === route})} route={route} > */}
          <MainMenuTab>
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