import React, { Component } from 'react';
import {ShortNoticeContainer, ShortNoticeController} from 'react-short-notice';
import IconLoading from './IconLoading';
import MainTemplete from '../../common/layout/MainTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete'
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import {FloatButton} from '../../buttons'
import { Divider } from '../../style/components'

class IconLoadingContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconLoading}':'react-icx-component'}
  ]

  libraryObject={
    name:'IconLoading',
    param:[
      {isShow:'{true}'},
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
        <DescriptionTemplete title="Loading Components">
          api호출시 대기 시간동안 Loading을 보여줄때 사용합니다.<br/>
          Click Me를 눌러보세요.
        </DescriptionTemplete>
        <ShortNoticeContainer id="iconLoading" timeout='2000'>
          <IconLoading isShow={true} label="잠시만 기달려주세요.<br/>처리중입니다."/>
        </ShortNoticeContainer>
        <ComponentTemplete>
          <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
          </Code>
          <Divider />
          <FloatButton onClick={this.showLoading} icxStyle="primary" label="Click Me" />
        </ComponentTemplete>
        
        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconLoadingContainer;