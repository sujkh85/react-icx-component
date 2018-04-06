import React, { PureComponent } from 'react';
// import cn from 'classnames';
import { withRouter } from 'react-router';
import MainMenuItem from './MainMenuItem'

class MainMenu extends PureComponent {
  onClickMenu=(e)=>{
    let targetPageName = this.props.location.query.pagename
    let route = e.target.getAttribute('route')
    if(route !== targetPageName){
      this.props.history.push(`/?pagename=${route}`)
    }
  }
  render() {
    let targetPageName = this.props.location.query.pagename
    return (
      <div className="icon-main-menu-container">
        <MainMenuItem label="Step" route="etc/iconstep" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
        <MainMenuItem label="Loading" route="etc/iconloading" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
        <MainMenuItem label="ShortNotice" route="etc/iconshortnotice" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
      </div>
    );
  }
}

export default withRouter(MainMenu);