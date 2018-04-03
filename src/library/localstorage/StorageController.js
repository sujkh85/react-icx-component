import Preferences from '../../Preferences';
import StorageControllerForChromeApp from './StorageControllerForChromeApp';
import StorageControllerForWeb from './StorageControllerForWeb';

class StorageController {
  static loadCryptoKey(){
    if(Preferences.isChromeApp === true){
      StorageControllerForChromeApp.loadCryptoKey()
    } 
    else {
      StorageControllerForWeb.loadCryptoKey()
    }
  }

  static loadProjectList(){
    if(Preferences.isChromeApp === true){
      StorageControllerForChromeApp.loadProjectList()
    } 
    else {
      StorageControllerForWeb.loadProjectList()
    }
  }

  static addProject(project){
    if(Preferences.isChromeApp === true){
      StorageControllerForChromeApp.addProject(project)
    } 
    else {
      StorageControllerForWeb.addProject(project)
    }
  }

  static deleteProject(targetKey){
    if(Preferences.isChromeApp === true){
      StorageControllerForChromeApp.deleteProject(targetKey)
    } 
    else {
      StorageControllerForWeb.deleteProject(targetKey)
    }
  }

  static modifyProject(targetProject){
    if(Preferences.isChromeApp === true){
      StorageControllerForChromeApp.modifyProject(targetProject)
    } 
    else {
      StorageControllerForWeb.modifyProject(targetProject)
    }
  }

  static loadIcxTransactionStamp(){
    if(Preferences.isChromeApp === true){
      StorageControllerForChromeApp.loadIcxTransactionStamp()
    } 
    else {
      StorageControllerForWeb.loadIcxTransactionStamp()
    }
  }

  static setIcxTransactionStamp(contractAddress, icxTransactionStamp){
    if(Preferences.isChromeApp === true){
      StorageControllerForChromeApp.setIcxTransactionStamp(contractAddress, icxTransactionStamp)
    } 
    else {
      StorageControllerForWeb.setIcxTransactionStamp(contractAddress, icxTransactionStamp)
    }
  }

}

export default StorageController