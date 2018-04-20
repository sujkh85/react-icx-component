import React, { Component } from 'react';
import MainTemplete from '../../common/layout/MainTemplete';
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import Excel from './Excel';
import {FloatButton} from '../../buttons'
import IconShortNotice from '../../etc/iconshortnotice/IconShortNotice'
import {ShortNoticeController} from 'react-short-notice';

class ExcelContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{Excel}':'react-icx-component'}
  ]

  onWrite=()=>{
    let dataList = [
      ['a','b','c'],
      [1,2,3],
      [4,5,6],
    ]
    
    Excel.write('fileName.xlsx','sheetName',dataList,()=>{
      console.log('in')
      ShortNoticeController.show('notice1')
    });
  }

  render() {
    return (
      <MainTemplete>
        <DescriptionTemplete title="Excel Util">
          엑셀 쓰기
        </DescriptionTemplete>
        <Code importFromList={this.importFromList}>
          {'let callback=()=>{console.log("in")}'}<br/><br/>
          {'let write=()=>{'}<br/>
          &nbsp;&nbsp;{'let dataList = ['}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'[a,b,c],'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'[1,2,3],'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'[4,5,6],'}<br/>
          &nbsp;&nbsp;{']'}<br/>
          &nbsp;&nbsp;{"Excel.write('fileName.xlsx, sheetName, dataList, callback)"}<br/>
          {'}'}<br/>
          {'write()'}
        </Code>
        
        <DescriptionTemplete>
          버튼을 누르면 write함수가 호출됩니다.<br/>
          write함수 인자값으로 파일명, 시트명, 데이터리스트, 콜백함수를 넣어주세요.<br/>
        </DescriptionTemplete>

        <ComponentTemplete>
          <IconShortNotice id="notice1" timeout="2000" label="다운로드 되었습니다." />
          <FloatButton onClick={this.onWrite} icxStyle="primary" label="Write" />
        </ComponentTemplete>

        {/* <PropertyTable propertyTableList={this.propertyTableList}/> */}
      </MainTemplete>
    );
  }
}

export default ExcelContainer;