import React, { Component } from 'react';
import IconStep from './IconStep';
import MainTemplete from '../../common/layout/MainTemplete';
import Code from '../../common/Code';

class IconStepContainer extends Component {
  render() {
    return (
      <MainTemplete>
        <div>
          <Code>
            {"<IconStep stepList={['step1', 'step2', 'step3']} descriptionList={['description1','description2','description3']} step={1}/>"}
          </Code>
          <IconStep stepList={['step1', 'step2', 'step3']} descriptionList={['description1','description2','description3']} step={1}/>
        </div>
      </MainTemplete>
    );
  }
}

export default IconStepContainer;