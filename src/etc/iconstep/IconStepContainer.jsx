import React, { Component } from 'react';
import IconStep from './IconStep';
import MainTemplete from '../../common/layout/MainTemplete'
class IconStepContainer extends Component {
  render() {
    return (
      <MainTemplete>
        <IconStep stepList={['step1', 'step2', 'step3']} descriptionList={['description1','description2','description3']} step={1}/>
      </MainTemplete>
    );
  }
}

export default IconStepContainer;