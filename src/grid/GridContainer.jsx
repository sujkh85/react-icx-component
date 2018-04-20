import React, { Component } from 'react';
import { ShortNoticeContainer, ShortNoticeController } from 'react-short-notice';
// import IconLoading from './IconLoading';
import MainTemplete from '../common/layout/MainTemplete';
import DescriptionTemplete from '../common/layout/DescriptionTemplete'
import ComponentTemplete from '../common/layout/ComponentTemplete';
import Code from '../common/Code';
import PropertyTable from '../common/PropertyTable';
// import FlatButton from './components/FlatButton'
// import FloatButton from './components/FloatButton'
import { Divider } from '../style/components'
import { GridContainer, GridColumn, GridRow } from '../style'
import IconLoading from '../etc/iconloading/IconLoading';

class ButtonContainer extends Component {
  importFromList = [
    { React: 'react' },
    { '{GridContainer, GridColumn, GridRow}': 'react-icx-component' }
  ]
  importFromList2 = [
    { React: 'react' },
    { '{FloatButton}': 'react-icx-component' }
  ]

  libraryObject = {
    name: 'GridColumn',
    param: [
      { sm: '"6"' },
      { md: '"3"' },
      { lg: '"6"' },
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
      name: 'xs',
      type: 'number',
      require: false,
      description: 'Columns for mobile <576px'
    },
    {
      name: 'sm',
      type: 'number',
      require: false,
      description: 'Columns for tablets ≥768px'
    },
    {
      name: 'md',
      type: 'number',
      require: false,
      description: 'Columns for small desktops ≥992px'
    },
    {
      name: 'lg',
      type: 'number',
      require: false,
      description: 'Columns for medium desktops ≥1200px'
    },
   
  ]

  render() {
    return (
      <MainTemplete>
        <DescriptionTemplete title="레이아웃 - (Grid)">
          그리드 컴포넌트 입니다.<br/>
        </DescriptionTemplete>
        <ComponentTemplete>
          <Code importFromList={this.importFromList} libraryObject={this.libraryObject}>
          </Code>
          <Divider />
          <GridContainer>
            <GridRow>
              <GridColumn sm='6' md="3" lg='6'>
                <div style={{ background: '#eee' }}>
                  wow
                </div>
              </GridColumn>
              <GridColumn sm='6' md="3" lg='6'>
                <div style={{ background: '#eee' }}>
                  wow2
                </div>
              </GridColumn>
              <GridColumn sm='6' md="3" lg='6'>
                <div style={{ background: '#eee' }}>
                  wow3
                </div>
              </GridColumn>
              <GridColumn sm='6' md="3" lg='6'>
                <div style={{ background: '#eee' }}>
                  wow4
                </div>
              </GridColumn>
            </GridRow>
          </GridContainer>
        </ComponentTemplete>
        <PropertyTable propertyTableList={this.propertyTableList} />
      </MainTemplete>
    );
  }
}

export default ButtonContainer;