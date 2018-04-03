import { Component } from 'react';
import {connect} from 'react-redux';
import {LISTENER_KEY, EVENT_TYPE} from './Constants';
import * as ProjectAction from '../../ProjectAction';

class StorageListener extends Component {
  onListener=(e)=>{
    const {type} = e.detail;
    
    switch (type) {
      case EVENT_TYPE.loadProjectList:
        this.loadProjectList(e.detail.payload)
        break;
      case EVENT_TYPE.addProject:
        this.addProject(e.detail.payload);
        break;
      case EVENT_TYPE.deleteProject:
        this.deleteProject(e.detail.payload);
        break;
      case EVENT_TYPE.modifyProject:
        this.modifyProject(e.detail.payload);
        break;
      case EVENT_TYPE.loadIcxTransactionStamp:
        this.loadIcxTransactionStamp(e.detail.payload);
        break;
      default:
        break;
    }
  }

  loadIcxTransactionStamp=(payload)=>{
    this.props.loadIcxTransactionStamp(payload.icxTransactionStamp)
  }
  
  loadProjectList=(payload)=>{
    this.props.loadProjectList(payload.projectList)
  }

  addProject=(payload)=>{
    this.props.addProject(payload.projectList)
  }

  deleteProject=(payload)=>{
    this.props.deleteProject(payload.projectList)
  }

  modifyProject=(payload)=>{
    this.props.modifyProject(payload.projectList)
  }

  componentDidMount() {
    window.addEventListener(LISTENER_KEY, this.onListener, false);
  }

  componentWillUnmount() {
    window.removeEventListener(LISTENER_KEY,this.onListener, false);
  }
  
  render() {
    return (
      null
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadProjectList: (projectList) => {
      dispatch(ProjectAction.loadProjectList(projectList))
    },
    addProject:(projectList)=>{
      dispatch(ProjectAction.addProject(projectList))
    },
    deleteProject:(projectList)=>{
      dispatch(ProjectAction.deleteProject(projectList))
    },
    modifyProject:(projectList)=>{
      dispatch(ProjectAction.modifyProject(projectList))
    },
    loadIcxTransactionStamp:(icxTransactionStamp)=>{
      dispatch(ProjectAction.loadIcxTransactionStamp(icxTransactionStamp))
    }
  }
}

export default connect(null, mapDispatchToProps)(StorageListener);