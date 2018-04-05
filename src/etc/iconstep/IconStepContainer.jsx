import React, { Component } from 'react';
import IconStep from './IconStep';
import MainTemplete from '../../common/layout/MainTemplete';
import Code from '../../common/Code';

class IconStepContainer extends Component {
  importCode=[
    {React:'react'},
    {IcxComponent:'react-icx-component'}
  ]

  libraryObject={
    name:'IconStep',
    param:[
      {stepList:"{['step1', 'step2', 'step3']}"}, 
      {descriptionList:"{['description1','description2','description3']}"},
      {step:"{1}"}
    ],
  }

  render() {
    return (
      <MainTemplete>
        <div>
          <Code importFrom={this.importCode} libraryObject={this.libraryObject}/>
          <IconStep stepList={['step1', 'step2', 'step3']} descriptionList={['description1','description2','description3']} step={1}/>
        </div>
      </MainTemplete>
    );
  }
}

export default IconStepContainer;