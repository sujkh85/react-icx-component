import React, { Component } from 'react';
import IconStep from './IconStep';

class IconStepContainer extends Component {
  render() {
    return (
      <div>
        <IconStep list={['step1', 'step2']} description={['description1','description2']} step={1}/>
      </div>
    );
  }
}

export default IconStepContainer;