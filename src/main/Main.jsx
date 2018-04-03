import React from 'react';
import MainHeader from './components/MainHeader';
import MainBody from './components/MainBody';
import MainFooter from './components/MainFooter';

class Main extends React.PureComponent {
  render() {  
    return (
      <div>
        <MainHeader/>
        <MainBody/>
        <MainFooter/>
      </div>
    );
  }
}

export default Main;