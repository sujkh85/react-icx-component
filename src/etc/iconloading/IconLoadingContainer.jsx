import React, { Component } from 'react';
import {ShortNoticeContainer, ShortNoticeController} from 'react-short-notice';
import IconLoading from './IconLoading';
import MainTemplete from '../../common/layout/MainTemplete';
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';


class IconStepContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconLoading}':'react-icx-component'}
  ]

  libraryObject={
    name:'IconLoading',
    param:[
      {isShow:'true'},
      {label:'"처리중입니다.<br/>잠시만 기달려주세요."'}
    ],
  }

  propertyTableList=[
    {name:'isShow', type:'bool', require:false, default:'false', description:'보여줄지 말지 결정하는 속성'},
    {name:'label', type:'string', require:false, default:'처리중입니다.', description:'라벨'},
  ]

  showLoading=()=>{
    ShortNoticeController.show('iconLoading')
  }

  render() {
    return (
      <MainTemplete>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
        </Code>
        <ShortNoticeContainer id="iconLoading" timeout="2000">
          <IconLoading isShow={true} label="잠시만 기달려주세요.<br/>처리중입니다."/>
        </ShortNoticeContainer>
        <ComponentTemplete>
          <button onClick={this.showLoading}>Click Me</button>
        </ComponentTemplete>

        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconStepContainer;