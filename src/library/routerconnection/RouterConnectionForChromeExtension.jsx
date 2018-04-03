import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as ConfigAction from '../../config/ConfigAction'
// import {parseQueryString} from '../queryrouter/parseQueryString';
import Preferences from '../../Preferences'

class RouterConnectionForChromeExtension extends Component {
	render() {
    if(Preferences.isChromeApp){
      let newProps = {
        path:this.props.path,
        history:this.props.history
      }
      return React.createElement(this.props.component, {...newProps});
    }
    else {
      return React.createElement(this.props.component, {...this.props});
    }
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    history:{
      push:(path)=>{
        dispatch(ConfigAction.changeRoute(path))
      }
    } 
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    path:state.ConfigReducer.path
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterConnectionForChromeExtension)
