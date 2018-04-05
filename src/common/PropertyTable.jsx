import React, { Component } from 'react';

class PropertyTable extends Component {
  render() {
    const {propertyTableList=[]}= this.props 
    return (
      <div className="icon-table-style-details">
        <div className="icon-properties">
          <span>Properties</span>
        </div>
        <table>
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
          </colgroup>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Require</th>
              <th>Default</th>
              <th>Description</th>  
            </tr>
          </thead>
          <tbody>
            {propertyTableList.map((item)=>{
              return(
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.require?'O':'X'}</td>
                  <td>{item.default}</td>
                  <td>{item.description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PropertyTable;