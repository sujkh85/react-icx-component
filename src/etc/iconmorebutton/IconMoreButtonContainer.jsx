import React, { Component } from 'react';
import MainTemplete from '../../common/layout/MainTemplete';
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import IconMoreButton from './IconMoreButton';

class IconMoreButtonContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconMoreButton}':'react-icx-component'}
  ]

  propertyTableList=[
    {name:'type', type:'string', require:false, default:'right',description:'좌측 우측 선택'},
    {name:'child', type:'dom', require:true, default:'',description:'클릭시 나오게할 메뉴를 넣어줍니다.'},
  ]

  render() {
    return (
      <MainTemplete>
        <DescriptionTemplete title="Icon MoreButton">
          MoreButton
        </DescriptionTemplete>
        <Code importFromList={this.importFromList}>
          {'<IconMoreButton type="left">'}<br/>
          &nbsp;&nbsp;{'<li>메뉴1</li><li>메뉴2</li>'}<br/>
          {'</IconMoreButton>'}<br/>
          
        </Code>
        
        <DescriptionTemplete>
          ...클릭시 하단에 메뉴가 나옵니다.
        </DescriptionTemplete>

        <ComponentTemplete>
          <IconMoreButton type="left">
            <li>메뉴1</li>
            <li>메뉴2</li>
          </IconMoreButton>
        </ComponentTemplete>

        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconMoreButtonContainer;