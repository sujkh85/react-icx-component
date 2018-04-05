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

  render() {
    return (
      <div className="icon-code-container">
        <code>
          {this.getImportRenderer()}<br/>
          {this.getLibraryObjectRenderer()}
          {this.props.children}
        </code>
      </div>
    );
  }
}

export default Code;