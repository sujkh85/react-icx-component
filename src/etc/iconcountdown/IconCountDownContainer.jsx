import React, { Component } from 'react';
import moment from 'moment';
import MainTemplete from '../../common/layout/MainTemplete';
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import IconCountDown from './IconCountDown'
// import 

class IconCountDownContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconCountDown}':'react-icx-component'}
  ]
  //scheduleStartDate, scheduleEndDate
  libraryObject={
    name:'IconCountDown',
    param:[
      {scheduleStartDate:0}, 
      {descriptionList:"{['description1','description2','description3']}"},
    ],
  }

  propertyTableList=[
    {name:'stepList', type:'array', require:true, default:'[]',description:'스탭명'},
    {name:'descriptionList', type:'array', require:true, default:'[]',description:'해당스탭의 설명'},
    {name:'step', type:'number', require:true, default:'0',description:'스탭인덱스'},
  ]

  componentDidMount() {
    
  }

  render() {
    return (
      <MainTemplete>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}/>
        
        <DescriptionTemplete>
          stepList와 descriptionList langth가 같이야합니다.
        </DescriptionTemplete>

        <ComponentTemplete>
          <IconCountDown scheduleStartDate={1523250124972} scheduleEndDate={2523250124972}/>
        </ComponentTemplete>

        

        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconCountDownContainer;