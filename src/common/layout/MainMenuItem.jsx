import React, { Component } from 'react';
import cn from 'classnames';

class MainMenuItem extends Component {
  render() {
    const {targetPageName, route="etc/iconstep", label} = this.props
    return (
      <div className={cn('contract-category')} route={route} onClick={this.props.onClickMenu}>
        <div className={cn('contract-tab',{'on':targetPageName === route})} >
          {label}
        </div>
      </div>
    );
  }
}

export default MainMenuItem;