import React, { Component } from 'react';
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
            <span className="bold">import</span> {key} <span className="bold">from</span> <span className="red">'{value}'</span>;  
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
          <span className="blue">{'<'}{libraryObject.name}</span> <br/>
            {libraryObject.param.map((item)=>{
              let key = Object.keys(item)[0]
              let value = item[key]
              return(
                <div>
                  &nbsp;&nbsp;<span className="blue">{key}=</span>
                  <span className="red">{value}</span>
                </div>
              )
            })}
          <span className="blue">{'/>'}</span> 
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
                childrenResultList.push(<span className="blue">{item+' '}</span>)
              }
              else{
                let itemSubstring1 = item.substring(0, itemIndex+1)
                let itemSubstring2 = item.substring(itemIndex+1, itemIndex+2)
                let itemSubstring3 = item.substring(itemIndex+2, item.length)

                childrenResultList.push(<span className="blue">{itemSubstring1}</span>)
                childrenResultList.push(<span className="red">{itemSubstring2}</span>)

                if(itemSubstring2 === '"'){
                  let idx = itemSubstring3.indexOf('"')
                  let itemSubstring3Sub1 = itemSubstring3.substring(0, idx+1)
                  let itemSubstring3Sub2 = itemSubstring3.substring(idx+1, itemSubstring3.length)
                  childrenResultList.push(<span className="red">{itemSubstring3Sub1}</span>)
                  childrenResultList.push(<span className="blue">{itemSubstring3Sub2+ ' '}</span>)
                }
                else if(itemSubstring2 === '{'){
                  let idx = itemSubstring3.lastIndexOf('}')
                  let itemSubstring3Sub1 = itemSubstring3.substring(0, idx+1)
                  let itemSubstring3Sub2 = itemSubstring3.substring(idx+1, itemSubstring3.length)
                  childrenResultList.push(<span className="red">{itemSubstring3Sub1}</span>)
                  childrenResultList.push(<span className="blue">{itemSubstring3Sub2+ ' '}</span>)
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
    return (
      <div className="icon-code-container">
        <code>
          {this.getImportRenderer()}<br/>
          {this.getLibraryObjectRenderer()}
          <br/>
          {/* {this.props.children} */}
          {/* {this.props.children}<br/><br/> */}
          {childrenResultList}
        </code>
      </div>
    );
  }
}

export default Code;