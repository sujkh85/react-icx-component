import React, { Component } from 'react';
import IconStep from './IconStep';

class IconStepContainer extends Component {
  render() {
    return (
      <div>
        <IconStep stepList={['step1', 'step2', 'step3']} descriptionList={['description1','description2','description3']} step={1}/>
      </div>
    );
  }
}

export default IconStepContainer;