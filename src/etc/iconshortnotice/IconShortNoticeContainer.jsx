import React, { Component } from 'react';
import {ShortNoticeContainer, ShortNoticeController} from 'react-short-notice';
import MainTemplete from '../../common/layout/MainTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete'
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import IconShortNotice from './IconShortNotice';

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

  showLoading=(e)=>{
    let target = e.target.getAttribute('target');
    ShortNoticeController.show(target)
  }

  render() {
    return (
      <MainTemplete>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
          <br/>
          {'<IconShortNotice id="notice2" timeout="2000">'}<br/>
          &nbsp;&nbsp;{"<span style={{color:'blue'}}>아이디를 입력해주세요.2</span>"}<br/>
          {'</IconShortNotice>'}<br/><br/>
          {'//IconShortNoticeController.show("notice1")'}<br/>
          {'//IconShortNoticeController.show("notice2")'}<br/>
        </Code>
        <DescriptionTemplete>
          react-short-notice를 사용하여고 디자인 작업만 입혔습니다.<br/>
          IconShortNotice컴포넌트를 예제처럼 설정하고 <br/>
          IconShortNoticeController.show함수를 호출하여 노티를 띄울수있습니다.<br/>
          Click Me를 눌러보세요.
        </DescriptionTemplete>

        <IconShortNotice id="notice1" timeout="2000" label="아이디를 입력해주세요.1" />

        <IconShortNotice id="notice2" timeout="2000">
          <span style={{color:'blue'}}>아이디를 입력해주세요.2</span>
        </IconShortNotice>

        <ComponentTemplete>
          <button onClick={this.showLoading} style={{fontSize:15}} target="notice1">Click Me1</button> 
          <button onClick={this.showLoading} style={{fontSize:15}} target="notice2">Click Me2</button> 
        </ComponentTemplete>
        
        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconLoadingContainer;