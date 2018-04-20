import React, { Component } from 'react';
import MainTemplete from '../../common/layout/MainTemplete';
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import IconTab from './IconTab';

class IconStepContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconTab}':'react-icx-component'}
  ]

  libraryObject={
    name:'IconTab',
    param:[
      {tabList:"{['Upcomming','Ongoing','Finished']}"}, 
      {defaultSelectIndex:"{0}"},
      {onClick:"{(e)=>{console.log(e.tab,e.index)}}"}
    ],
  }

  propertyTableList=[
    {name:'tabList', type:'array', require:true, default:'',description:'탭이름'},
    {name:'defaultSelectIndex', type:'number', require:false, default:'0',description:'디폴트로 선택할 탭 인덱스'},
    {name:'onClick', type:'function', require:false, default:'',description:'선택된 탭의 이름(e.tab)과 인덱스(e.index)를 받는 callback'},
    {name:'styles', type:'object', require:false, default:'모든옵션#000000',description:'자세한 사항은 하단 설명'},
  ]

  onClickTab=(e)=>{
    console.log('e', e)
  }

  render() {
    return (
      <MainTemplete>
        <DescriptionTemplete title="Icon Tab">
          아이콘 홈페이지의 Tab style
        </DescriptionTemplete>
        <Code importFromList={this.importFromList} libraryObject={this.libraryObject}/>
        
        <DescriptionTemplete>
          icon 스타일의 탭 
        </DescriptionTemplete>

        <ComponentTemplete>
         <IconTab tabList={['Upcomming','Ongoing','Finished']} defaultSelectIndex={0} onClick={this.onClickTab} />
        </ComponentTemplete>

        <PropertyTable propertyTableList={this.propertyTableList}/>
        <DescriptionTemplete>
          <h4>Styles</h4><br/>
          textColor : 탭 이름의 색상 (default:#000000)<br/>
          bottomLineColor : 언더라인 색상 (default:#000000)<br/>
        </DescriptionTemplete>
      </MainTemplete>
    );
  }
}

export default IconStepContainer;