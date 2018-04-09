import React, { Component } from 'react';
import IconStep from './IconStep';
import MainTemplete from '../../common/layout/MainTemplete';
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';

class IconStepContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconStep}':'react-icx-component'}
  ]

  libraryObject={
    name:'IconStep',
    param:[
      {stepList:"{['step1', 'step2', 'step3']}"}, 
      {descriptionList:"{['description1','description2','description3']}"},
      {step:"{1}"}
    ],
  }

  propertyTableList=[
    {name:'stepList', type:'array', require:true, default:'[]',description:'스탭명'},
    {name:'descriptionList', type:'array', require:true, default:'[]',description:'해당스탭의 설명'},
    {name:'step', type:'number', require:true, default:'0',description:'스탭인덱스'},
  ]

  render() {
    return (
      <MainTemplete>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}/>
        
        <DescriptionTemplete>
          stepList와 descriptionList langth가 같이야합니다.
        </DescriptionTemplete>

        <ComponentTemplete>
          <IconStep 
            stepList={['step1', 'step2', 'step3']} 
            descriptionList={['description1','description2','description3']} 
            step={1}
          />
        </ComponentTemplete>

        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconStepContainer;