import React from 'react';
//이미지 및 scss로드 
import 'assets/scss/App.scss';
import reactLogo from 'assets/img/react_logo.svg';

class Sample extends React.PureComponent {
  render() {
    return ( 
        <div className="app">
          <h1>Hello World!</h1>
          <p>Foo to the bar</p>
          <img src={reactLogo} height="480"/>
        </div>
    );
  }
}

export default Sample;
