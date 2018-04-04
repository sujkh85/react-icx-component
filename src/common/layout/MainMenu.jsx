import React, { PureComponent } from 'react';
import cn from 'classnames';
import { withRouter } from 'react-router';
import MainMenuItem from './MainMenuItem'

class MainMenu extends PureComponent {
  onClickMenu=(e)=>{
    let targetPageName = this.props.location.query.pagename
    let route = e.target.getAttribute('route')
    if(route !== targetPageName){
      this.props.history.push(route)
    }
  }
  render() {
    console.log('this.props', this.props)
    let targetPageName = this.props.location.query.pagename
    console.log('targetPageName',targetPageName)
    return (
      <div className="icon-main-menu-container">
        <MainMenuItem label="Step" route="etc/iconstep" targetPageName={targetPageName} onClickMenu={this.onClickMenu}/>
        
      </div>
    );
  }
}

export default withRouter(MainMenu);