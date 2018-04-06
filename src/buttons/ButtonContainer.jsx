import React, { Component } from 'react';
// import { ShortNoticeContainer, ShortNoticeController } from 'react-short-notice';
// import IconLoading from './IconLoading';
import MainTemplete from '../common/layout/MainTemplete';
import DescriptionTemplete from '../common/layout/DescriptionTemplete'
import ComponentTemplete from '../common/layout/ComponentTemplete';
import Code from '../common/Code';
import PropertyTable from '../common/PropertyTable';
import FlatButton from './components/FlatButton'
import FloatButton from './components/FloatButton'
import {Divider} from '../style/components'

class ButtonContainer extends Component {
  importFromList = [
    { React: 'react' },
    { '{Button}': 'react-icx-component' }
  ]

  libraryObject = {
    name: 'Button',
    param: [
      { bsStyle: '"primary"' },
      { label: '"라벨"' }
    ],
  }

  propertyTableList = [
    {
      name: 'bsStyle',
      type: 'one of "primary","secondary","disabled"',
      require: false,
      default: '"default"',
      description: '보여줄지 말지 결정하는 속성' },
    { 
      name: 'label',
      type: 'string',
      require: false,
      default: '"버튼 텍스트"',
      description: '라벨' 
    },
  ]

  // showLoading = () => {
  //   ShortNoticeController.show('iconLoading')
  // }
  
  render() {
    return (
      <MainTemplete>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
        </Code>
        <DescriptionTemplete>
          플랫 버튼
        </DescriptionTemplete>
        <ComponentTemplete>
          <FlatButton/>
          <FlatButton label="디폴트"/>
          <FlatButton label="메인" bsStyle="primary"/>
          <FlatButton label="서브" bsStyle="secondary"/>
          <FlatButton label="비활성" bsStyle="disabled"/>
        </ComponentTemplete>
        <Divider/>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
        </Code>
        <DescriptionTemplete>
          플로팅 버튼
        </DescriptionTemplete>
        <ComponentTemplete>
          <FloatButton/>
          <FloatButton label="디폴트"/>
          <FloatButton label="메인" bsStyle="primary"/>
          <FloatButton label="서브" bsStyle="secondary"/>
          <FloatButton label="비활성" bsStyle="disabled"/>
        </ComponentTemplete>
        

        <PropertyTable propertyTableList={this.propertyTableList} />
      </MainTemplete>
    );
  }
}

export default ButtonContainer;