import React, { Component } from 'react';
import styled from 'styled-components'
// import Clipboard from 'react-clipboard.js';

class Code extends Component {
  getImportRenderer=()=>{
    let importRender= [];
    const {importFromList} = this.props
    if(importFromList){
      importFromList.forEach((item, index)=>{
        let key = Object.keys(item)[0]
        let value = item[key]
        importRender.push(
          <div key={key}>
            <span style={{fontWeight:'bold'}}>import</span> {key} <span style={{fontWeight:'bold'}}>from</span> <span style={{color:'red'}}>'{value}'</span>;  
          </div>
        )
      })
      return importRender;
    }
    else{
      return null
    }
  }

  getLibraryObjectRenderer=()=>{
    const {libraryObject} = this.props
    console.log('libraryObject', libraryObject)
    if(libraryObject){
      return(
        <div>
          <span style={{color:'blue'}}>{'<'}{libraryObject.name}</span> <br/>
            {libraryObject.param.map((item)=>{
              let key = Object.keys(item)[0]
              let value = item[key]
              return(
                <div>
                  &nbsp;&nbsp;<span style={{color:'blue'}}>{key}=</span>
                  <span style={{color:'red'}}>{value}</span>
                </div>
              )
            })}
          <span style={{color:'blue'}}>{'/>'}</span> 
        </div>
      )
    }
    else{
      return null
    }
  }

  getCodeChildrunRenderer=()=>{
    let {children} = this.props;
    let childrenResultList = []
    if(Array.isArray(children) === true){
      children.forEach((child, index)=>{
        if(typeof child === 'string'){
          if(child.startsWith('<') === true){
            let splitArr = child.split(' ')
            splitArr.forEach((item)=>{
              let itemIndex = item.indexOf('=');
              if(itemIndex === -1){
                childrenResultList.push(<span style={{color:'blue'}}>{item+' '}</span>)
              }
              else{
                let itemSubstring1 = item.substring(0, itemIndex+1)
                let itemSubstring2 = item.substring(itemIndex+1, itemIndex+2)
                let itemSubstring3 = item.substring(itemIndex+2, item.length)

                childrenResultList.push(<span style={{color:'blue'}}>{itemSubstring1}</span>)
                childrenResultList.push(<span style={{color:'red'}}>{itemSubstring2}</span>)

                if(itemSubstring2 === '"'){
                  let idx = itemSubstring3.indexOf('"')
                  let itemSubstring3Sub1 = itemSubstring3.substring(0, idx+1)
                  let itemSubstring3Sub2 = itemSubstring3.substring(idx+1, itemSubstring3.length)
                  childrenResultList.push(<span style={{color:'red'}}>{itemSubstring3Sub1}</span>)
                  childrenResultList.push(<span style={{color:'blue'}}>{itemSubstring3Sub2+ ' '}</span>)
                }
                else if(itemSubstring2 === '{'){
                  let idx = itemSubstring3.lastIndexOf('}')
                  let itemSubstring3Sub1 = itemSubstring3.substring(0, idx+1)
                  let itemSubstring3Sub2 = itemSubstring3.substring(idx+1, itemSubstring3.length)
                  childrenResultList.push(<span style={{color:'red'}}>{itemSubstring3Sub1}</span>)
                  childrenResultList.push(<span style={{color:'blue'}}>{itemSubstring3Sub2+ ' '}</span>)
                }
              }
            })
          }
          else if(child.startsWith('//') === true){
            childrenResultList.push(child)
          }
          else {
            childrenResultList.push(child)  
          }
        }
        else {
          childrenResultList.push(child)
        }
      })
    }
    else {
      childrenResultList.push(children)
    }
    return childrenResultList;
  }

  
  render() {
    let childrenResultList = this.getCodeChildrunRenderer();
    const IconCodeContainer = styled.div`
      width: 100%;
      font-size: 14px;
      background-color: #f6f8fa;
      padding: 10px;
      margin: 10px 0px;
      box-sizing: border-box;
    `
    return (
      <IconCodeContainer>
        <code>
          {this.getImportRenderer()}<br/>
          {this.getLibraryObjectRenderer()}
          <br/>
          {/* {this.props.children} */}
          {/* {this.props.children}<br/><br/> */}
          {childrenResultList}
        </code>
      </IconCodeContainer>
    );
  }
}

export default Code;