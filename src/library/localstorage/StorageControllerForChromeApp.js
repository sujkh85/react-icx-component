import isJSON from 'is-json';
import {STORAGE_KEY, CRYPTO_KEY} from './Constants';
import SyncStorageToRedux from './SyncStorageToRedux';
import Preferences from '../../Preferences';
import getUuid from 'uuid/v1'

class StorageControllerForChromeApp {
  static set(key, value){
    let transValue
    if(typeof value === 'string'){
      transValue = value
    } 
    else {
      transValue = JSON.stringify(value);
    }

    window.chrome.storage.local.set({[key]: transValue}, function() {
    });
    
  }

  static get(key){
    if(Preferences.isChromeApp){
      window.chrome.storage.local.get(key,(chromeStorage)=> {
        if(isJSON(chromeStorage[key]) === true){
          SyncStorageToRedux.loadProjectList(JSON.parse(chromeStorage[key])) 
        } else {
          SyncStorageToRedux.loadProjectList(chromeStorage[key]?chromeStorage[key]:[])
        }
      });
    } 
    else {
      let keyItem = localStorage.getItem(key)
      if(isJSON(keyItem) === true){
        return JSON.parse(keyItem)
      } 
      else if(keyItem === '[]'){
        return []
      }
      else {
        return keyItem
      }
    }
  }

  static loadCryptoKey(){
    window.chrome.storage.local.get(CRYPTO_KEY,(chromeStorage)=> {
      let cryptoKey = chromeStorage[CRYPTO_KEY]
      if(!cryptoKey){
        cryptoKey =  getUuid()
        this.set(CRYPTO_KEY, cryptoKey)
      }
      window.iconicoKey = cryptoKey
      console.log('loaded')
    });
  }

  static loadProjectList(){
    window.chrome.storage.local.get(STORAGE_KEY.PROJECT_LIST,(chromeStorage)=> {
      if(isJSON(chromeStorage[STORAGE_KEY.PROJECT_LIST]) === true){
        SyncStorageToRedux.loadProjectList(JSON.parse(chromeStorage[STORAGE_KEY.PROJECT_LIST])) 
      } else {
        if(chromeStorage[STORAGE_KEY.PROJECT_LIST] === '[]'){
          SyncStorageToRedux.loadProjectList([])
        }
        else {
          SyncStorageToRedux.loadProjectList(chromeStorage[STORAGE_KEY.PROJECT_LIST]?chromeStorage[STORAGE_KEY.PROJECT_LIST]:[])
        }
      }
    });
  }

  static addProject(extendKeyStore){
    window.chrome.storage.local.get(STORAGE_KEY.PROJECT_LIST, (chromeStorage) =>{
      let initProjectList = chromeStorage[STORAGE_KEY.PROJECT_LIST] 
      let projectList
      if(initProjectList){
        if(initProjectList === '[]'){
          projectList = []
        }
        else {
          projectList = initProjectList
        }
      }
      else {
        projectList = []
      }
      if(isJSON(projectList) === true){
        projectList = JSON.parse(projectList)
      }

      if(projectList){
        projectList.push(extendKeyStore)
      } 
      //없을때
      else {
        projectList = []
        projectList.push(extendKeyStore)
      }
      //스토리지 업데이트
      this.set(STORAGE_KEY.PROJECT_LIST, projectList)
      //스토리지 리덕스 싱크맞추기
      SyncStorageToRedux.addProject(projectList)
    });
  }

  static deleteProject(targetKey){
    window.chrome.storage.local.get(STORAGE_KEY.PROJECT_LIST, (chromeStorage) =>{
      let projectList = chromeStorage[STORAGE_KEY.PROJECT_LIST] 
      if(isJSON(projectList) === true){
        projectList = JSON.parse(projectList)
      }
        let resultList = []
      projectList.forEach((project, index)=>{
        if(project.key !== targetKey){
          resultList.push(project)
        }
      })

      this.set(STORAGE_KEY.PROJECT_LIST, resultList)
      SyncStorageToRedux.deleteProject(resultList)
    });
  }

  static modifyProject(targetProject){
    window.chrome.storage.local.get(STORAGE_KEY.PROJECT_LIST, (chromeStorage) =>{
      let projectList = chromeStorage[STORAGE_KEY.PROJECT_LIST] 
      if(isJSON(projectList) === true){
        projectList = JSON.parse(projectList)
      }
      projectList.forEach((project, index)=>{
        if(project.key === targetProject.key){
          projectList[index] = targetProject
        }
      })
  
      this.set(STORAGE_KEY.PROJECT_LIST, projectList)
      SyncStorageToRedux.modifyProject(projectList)
    });
  }

 static loadIcxTransactionStamp(){
   window.chrome.storage.local.get(STORAGE_KEY.ICX_TRANSACTIONSTAMP,(chromeStorage)=> {
    let icxTransactionStamp = chromeStorage[STORAGE_KEY.ICX_TRANSACTIONSTAMP]
    if(isJSON(icxTransactionStamp) === true){
      icxTransactionStamp = JSON.parse(icxTransactionStamp)
      SyncStorageToRedux.loadIcxTransactionStamp(icxTransactionStamp)
    }
    else {
      SyncStorageToRedux.loadIcxTransactionStamp(icxTransactionStamp?icxTransactionStamp:{})
    }
   })
  }

  static setIcxTransactionStamp(contractAddress, icxTransactionStamp){
    window.chrome.storage.local.get(STORAGE_KEY.ICX_TRANSACTIONSTAMP,(chromeStorage)=> {
      let storageIcxTransactionStamp = chromeStorage[STORAGE_KEY.ICX_TRANSACTIONSTAMP]
      if(!storageIcxTransactionStamp){
        storageIcxTransactionStamp = {}  
      }
      
      if(isJSON(storageIcxTransactionStamp) === true){
        storageIcxTransactionStamp = JSON.parse(storageIcxTransactionStamp)
      }
  
      let contractAddressStamp = storageIcxTransactionStamp[contractAddress]
      
      console.log('storageIcxTransactionStamp', storageIcxTransactionStamp)
      console.log('contractAddress', contractAddress)
      console.log('icxTransactionStamp', icxTransactionStamp)

      if(contractAddressStamp){
        Object.keys(icxTransactionStamp).forEach((key)=>{
          contractAddressStamp[key]=true
        })
      }
      else {
        console.log('storageIcxTransactionStamp', storageIcxTransactionStamp)
        console.log('contractAddress', contractAddress)
        console.log('icxTransactionStamp', icxTransactionStamp)
        storageIcxTransactionStamp[contractAddress] = {...icxTransactionStamp}
      }

      this.set(STORAGE_KEY.ICX_TRANSACTIONSTAMP, storageIcxTransactionStamp)
      SyncStorageToRedux.loadIcxTransactionStamp(storageIcxTransactionStamp)
    })
  }
}

export default StorageControllerForChromeApp