import isJSON from 'is-json';
import {STORAGE_KEY, CRYPTO_KEY} from './Constants';
import SyncStorageToRedux from './SyncStorageToRedux';
import getUuid from 'uuid/v1'
class StorageControllerForWeb {
  static set(key, value){
    let transValue
    if(typeof value === 'string'){
      transValue = value
    } 
    else {
      transValue = JSON.stringify(value);
    }

    localStorage.setItem(key, transValue);
  }
  
  static get(key){
    let keyItem = localStorage.getItem(key)
    if(isJSON(keyItem) === true || keyItem === '[]'){
      return JSON.parse(keyItem)
    } 
    else {
      return keyItem
    }
  }

  static loadCryptoKey(){
    let cryptoKey = this.get(CRYPTO_KEY)
    if(!cryptoKey){
      cryptoKey = getUuid()
      this.set(CRYPTO_KEY, cryptoKey)
    }
    window.iconicoKey = cryptoKey
    console.log('loaded')
  }

  static loadProjectList(){
    const projectList = this.get(STORAGE_KEY.PROJECT_LIST)
    SyncStorageToRedux.loadProjectList(projectList ? projectList : [])
  }

  static addProject(extendKeyStore){
    let projectList = this.get(STORAGE_KEY.PROJECT_LIST);
    //기존 프로젝트가 있을때 
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
  }

  static deleteProject(targetKey){
    let projectList = this.get(STORAGE_KEY.PROJECT_LIST)
    let resultList = []
    projectList.forEach((project, index)=>{
      if(project.key !== targetKey){
        resultList.push(project)
      }
    })

    this.set(STORAGE_KEY.PROJECT_LIST, resultList)
    SyncStorageToRedux.deleteProject(resultList)
  }

  static modifyProject(targetProject){
    let projectList = this.get(STORAGE_KEY.PROJECT_LIST)
    projectList.forEach((project, index)=>{
      if(project.key === targetProject.key){
        projectList[index] = targetProject
      }
    })

    this.set(STORAGE_KEY.PROJECT_LIST, projectList)
    SyncStorageToRedux.modifyProject(projectList)
  }

  static loadIcxTransactionStamp(){
    let icxTransactionStamp = this.get(STORAGE_KEY.ICX_TRANSACTIONSTAMP)
    SyncStorageToRedux.loadIcxTransactionStamp(icxTransactionStamp?icxTransactionStamp:{})
  }
  /*
    icxTransactionStamp ={
      contractAddress:{
        txHash:true
      }
    }
  */
  static setIcxTransactionStamp(contractAddress, icxTransactionStamp){
    let storageIcxTransactionStamp = this.get(STORAGE_KEY.ICX_TRANSACTIONSTAMP)

    if(!storageIcxTransactionStamp){
      storageIcxTransactionStamp = {}  
    }

    let contractAddressStamp = storageIcxTransactionStamp[contractAddress]
    if(contractAddressStamp){
      Object.keys(icxTransactionStamp).forEach((key)=>{
        contractAddressStamp[key]=true
      })
    }
    else {
      storageIcxTransactionStamp[contractAddress] = {...icxTransactionStamp}
    }
    this.set(STORAGE_KEY.ICX_TRANSACTIONSTAMP, storageIcxTransactionStamp)
    SyncStorageToRedux.loadIcxTransactionStamp(storageIcxTransactionStamp)
  }
}

export default StorageControllerForWeb