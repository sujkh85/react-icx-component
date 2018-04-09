import React, { Component } from 'react';
import { ShortNoticeContainer, ShortNoticeController } from 'react-short-notice';
// import IconLoading from './IconLoading';
import MainTemplete from '../common/layout/MainTemplete';
import DescriptionTemplete from '../common/layout/DescriptionTemplete'
import ComponentTemplete from '../common/layout/ComponentTemplete';
import Code from '../common/Code';
import PropertyTable from '../common/PropertyTable';
import FlatButton from './components/FlatButton'
import FloatButton from './components/FloatButton'
import {Divider} from '../style/components'
import IconLoading from '../etc/iconloading/IconLoading';

class ButtonContainer extends Component {
  importFromList = [
    { React: 'react' },
    { '{FlatButton}': 'react-icx-component' }
  ]
  importFromList2 = [
    { React: 'react' },
    { '{FloatButton}': 'react-icx-component' }
  ]

  libraryObject = {
    name: 'FlatButton',
    param: [
      { bsStyle: '"primary"' },
      { label: '"라벨"' }
    ],
  }
  libraryObject2 = {
    name: 'FloatButton',
    param: [
      { bsStyle: '"primary"' },
      { label: '"라벨"' }
    ],
  }

  propertyTableList = [
    {
      name: 'icxStyle',
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
    { 
      name: 'disabled',
      type: 'bool',
      require: false,
      default: '"false"',
      description: '비활성' 
    },
    { 
      name: 'onClick',
      type: 'function',
      require: true,
      default: '',
      description: 'onClick 이벤트' 
    },
  ]

  onClickBtn = () => {
    ShortNoticeController.show('iconLoading')
  }
  
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
          <FlatButton label="메인" icxStyle="primary"/>
          <FlatButton label="서브" icxStyle="secondary"/>
          <FlatButton label="비활성" icxStyle="disabled" disabled/>
        </ComponentTemplete>
        <Divider/>
        <Code importFromList={this.importFromList2} libraryObject={this.libraryObject2}>
        </Code>
        <DescriptionTemplete>
          플로팅 버튼
        </DescriptionTemplete>
        <ComponentTemplete>
          <FloatButton/>
          <FloatButton label="디폴트" onClick={this.onClickBtn}/>
          <ShortNoticeContainer id="iconLoading" timeout='2000'>
            <IconLoading isShow={true} label="잠시만 기달려주세요.<br/>처리중입니다." />
          </ShortNoticeContainer>
          <FloatButton label="메인" icxStyle="primary"/>
          <FloatButton label="서브" icxStyle="secondary"/>
          <FloatButton label="비활성" icxStyle="disabled" disabled/>
        </ComponentTemplete>
        

        <PropertyTable propertyTableList={this.propertyTableList} />
      </MainTemplete>
    );
  }
}

export default ButtonContainer;