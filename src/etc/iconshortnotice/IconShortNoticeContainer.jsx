import React, { Component } from 'react';
import {ShortNoticeContainer, ShortNoticeController} from 'react-short-notice';
import MainTemplete from '../../common/layout/MainTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete'
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import IconShortNotice from './IconShortNotice';
import { FloatButton } from '../../buttons'
import { Divider } from '../../style/components'

class IconLoadingContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconShortNotice, IconShortNoticeController}':'react-icx-component'}
  ]

  libraryObject={
    name:'IconShortNotice',
    param:[
      {id:'"notice1"'},
      {timeout:'"2000"'},
      {label:'"아이디를 입력해주세요.1"'}
    ],
  }

  propertyTableList=[
    {name:'id', type:'string', require:true, default:'', description:'short-notice id값으로 ShortNoticeController.show(id)호출시 노티가 출력됩니다.'},
    {name:'timeout', type:'number', require:false, default:'', description:'show 후 몇초동안 켜질지 설정할수있습니다. 안넣으면 계속 노티가 출력됩니다.'},
    {name:'label', type:'string', require:false, default:'', description:'출력할 노티문구'},
  ]

  showLoading = (target) => {
    console.log(target)
    // let target = e.target.getAttribute('target');
    // ShortNoticeController.show(target)
  }

  render() {
    return (
      <MainTemplete>
        <DescriptionTemplete title="Short Notice">
          짧게 노티를 보여주는 컴포넌트
        </DescriptionTemplete>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
          {'<IconShortNotice id="notice2" timeout="2000">'}<br/>
          &nbsp;&nbsp;{"<span style={{color:'blue'}}>아이디를 입력해주세요.2</span>"}<br/>
          {'</IconShortNotice>'}<br/><br/>
          {'<button onClick={()=>{IconShortNoticeController.show("notice1")}}>Click Me1</buuton>'}<br/>
          {'<button onClick={()=>{IconShortNoticeController.show("notice2")}}>Click Me2</buuton>'}<br/>
        </Code>

        <DescriptionTemplete title="Short Notice Component">
          react-short-notice를 사용하여고 디자인 작업만 입혔습니다.<br/>
          IconShortNotice컴포넌트를 예제처럼 설정하고 <br/>
          IconShortNoticeController.show함수를 호출하여 노티를 띄울수있습니다.<br/>
          Click Me를 눌러보세요.
        </DescriptionTemplete>
 
        <ComponentTemplete>
          <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
            {'<IconShortNotice id="notice2" timeout="2000">'}<br/>
            &nbsp;&nbsp;{"<span style={{color:'blue'}}>아이디를 입력해주세요.2</span>"}<br/>
            {'</IconShortNotice>'}<br/><br/>
            {'<button onClick={()=>{IconShortNoticeController.show("notice1")}}>Click Me1</buuton>'}<br/>
            {'<button onClick={()=>{IconShortNoticeController.show("notice2")}}>Click Me2</buuton>'}<br/>
          </Code>
          <Divider />
          <IconShortNotice id="notice1" timeout="2000" label="아이디를 입력해주세요.1" />

          <IconShortNotice id="notice2" timeout="2000">
            <span style={{color:'blue'}}>아이디를 입력해주세요.2</span>
          </IconShortNotice>
          <div>
            <FloatButton onClick={() => ShortNoticeController.show('notice1')} label="Notice1"/>
            <FloatButton onClick={() => ShortNoticeController.show('notice2')} label="Notice2"/>
          </div>       

        </ComponentTemplete>
        
        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconLoadingContainer;