import React, {Component} from 'react';

class Route extends Component {
  render() {
    let newProps = {
      path:this.props.path,
      history:this.props.history
    }
    if (this.props.component) return React.createElement(this.props.component, newProps)

    return null
  }
}

class Switch extends Component {
  getChildrens=()=> {
    let component, defaultComponent;
    React.Children.forEach(this.props.children, (item) => {
      if (React.isValidElement(item)) {
        if (!component && item.type === Route) {
          if (item.props.exact === true && this.props.path === item.props.path) {
            component = item
          } else if(!item.props.exact){
            if(item.props.path && this.props.path.indexOf(item.props.path) !== -1){
              component = item  
            }
            else if(!component && !defaultComponent && item.props.nomatch === true) {
              component = item  
            }
          }
        } else if (!component && !defaultComponent && item.props.nomatch === true) {
          defaultComponent = item
        }
      }
    });

    if(!component){
      if (defaultComponent) {
        return defaultComponent;
      } else {
        return null;
      }
    }
    return React.cloneElement(component , {...this.props})
  }

  render() {
    return this.getChildrens()
  }
}

export default Switch;
export {Switch, Route};
