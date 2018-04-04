import React from 'react';
import IntroHeader from './components/IntroHeader';
import IntroBody from './components/IntroBody';
import IntroFooter from './components/IntroFooter';

class Intro extends React.PureComponent {
  render() {  
    return (
      <div>
        <IntroHeader/>
        <IntroBody {...this.props}/>
        <IntroFooter/>
      </div>
    );
  }
}

export default Intro;