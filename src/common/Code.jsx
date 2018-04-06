import React, { Component } from 'react';
// import Clipboard from 'react-clipboard.js';

class Code extends Component {
  getImportRenderer=()=>{
    let importRender= [];
    const {importFromList} = this.props
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

  getLibraryObjectRenderer=()=>{
    const {libraryObject} = this.props
    console.log('libraryObject', libraryObject)
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
                let splitItemArr = item.split('=');
                splitItemArr.forEach((innerItem, index)=>{
                  if(index === 0){
                    childrenResultList.push(<span className="blue">{innerItem+'='}</span>)
                  }
                  else if(index ===1){
                    let indexTarget = innerItem.indexOf('>')
                    if(indexTarget === -1){
                      childrenResultList.push(<span className="red">{innerItem+' '}</span>)
                    }
                    else{
                      childrenResultList.push(<span className="red">{innerItem.substring(0,indexTarget)}</span>)
                      childrenResultList.push(<span className="blue">{innerItem.substring(indexTarget,innerItem.length)}</span>)
                    }
                  }
                })
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
          {/* {this.props.children} */}
          {/* {this.props.children}<br/><br/> */}
          {childrenResultList}
        </code>
      </div>
    );
  }
}

export default Code;