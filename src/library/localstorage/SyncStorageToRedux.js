import {LISTENER_KEY, EVENT_TYPE} from './Constants';

export default class {
  static loadProjectList(projectList){
    let event = new window.CustomEvent(LISTENER_KEY, {
      detail:{
        type:EVENT_TYPE.loadProjectList,
        payload:{
          projectList: projectList
        }
      }
    })
    window.dispatchEvent(event);
  }

  static addProject(projectList){
    let event = new window.CustomEvent(LISTENER_KEY, {
      detail:{
        type:EVENT_TYPE.addProject,
        payload:{
          projectList: projectList
        }
      }
    })
    window.dispatchEvent(event);
  }

  static deleteProject(projectList){
    let event = new window.CustomEvent(LISTENER_KEY, {
      detail:{
        type:EVENT_TYPE.deleteProject,
        payload:{
          projectList: projectList
        }
      }
    })
    window.dispatchEvent(event);
  }
  
  static modifyProject(projectList){
    let event = new window.CustomEvent(LISTENER_KEY, {
      detail:{
        type:EVENT_TYPE.modifyProject,
        payload:{
          projectList: projectList
        }
      }
    })
    window.dispatchEvent(event);
  }

  static loadIcxTransactionStamp(icxTransactionStamp){
    let event = new window.CustomEvent(LISTENER_KEY, {
      detail:{
        type:EVENT_TYPE.loadIcxTransactionStamp,
        payload:{
          icxTransactionStamp: icxTransactionStamp
        }
      }
    })
    window.dispatchEvent(event);
  }

}