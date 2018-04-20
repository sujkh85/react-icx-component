import React, { Component } from 'react';
import moment from 'moment';
import MainTemplete from '../../common/layout/MainTemplete';
import ComponentTemplete from '../../common/layout/ComponentTemplete';
import DescriptionTemplete from '../../common/layout/DescriptionTemplete';
import Code from '../../common/Code';
import PropertyTable from '../../common/PropertyTable';
import IconCountDown from './IconCountDown';
import IconCountDownController from './IconCountDownController';
import { Divider } from '../../style/components'
// import 

class IconCountDownContainer extends Component {
  importFromList=[
    {React:'react'},
    {'{IconCountDown}':'react-icx-component'}
  ]
  //scheduleStartDate, scheduleEndDate
  libraryObject={
    name:'IconCountDown',
    param:[
      {scheduleStartDate:"{1523250124972}"}, 
      {scheduleEndDate:"{1573250124972}"}, 
      {isActive:"{true}"},
    ],
  }

  propertyTableList=[
    {name:'scheduleStartDate', type:'number', require:true, default:'',description:'시작시간'},
    {name:'scheduleEndDate', type:'number', require:true, default:'',description:'종료시간'},
    {name:'isActive', type:'bool', require:true, default:'true',description:'타이머를 활성화 시킬지 결정합니다.'},
    {name:'beforeTimeLabel', type:'object', require:false, default:'',description:'코드를 참고하세요.'},
    {name:'afterTimeLabel', type:'object', require:false, default:'',description:'코드를 참고하세요.'},
  ]

  componentDidMount() {
    IconCountDownController.on()
  }

  render() {
    return (
      <MainTemplete>
        <DescriptionTemplete title="Count Down Component">
          카운트 다운 컴포넌트입니다.<br/>
          scheduleStartDate 포맷은 unix time ms입니다.
        </DescriptionTemplete>
        <ComponentTemplete>
          {/* <Code importFromList={this.importFromList} >
            {'componentDidMount() {'}<br/>
            &nbsp;&nbsp;{'//1초에 한번씩 이벤트가 발생시켜 컴포넌트들에게 전달합니다.'}<br/>
            &nbsp;&nbsp;IconCountDownController.on()<br/>
            &nbsp;&nbsp;{'//controller가 동작여부를 반환합니다.'}<br/>
            &nbsp;&nbsp;{'//IconCountDownController.getIsOn()'}<br/>
            &nbsp;&nbsp;{'//이벤트발생을 종료시킵니다.'}<br/>
            &nbsp;&nbsp;{'//IconCountDownController.off()'}<br/>
            {'}'}<br/><br/>
            
            {"<IconCountDown scheduleStartDate={1523250124972} scheduleEndDate={1573250124972} isActive={true}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1523250124972} scheduleEndDate={1573250124972} isActive={false}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true} beforeTimeLabel={{day:'**',hour:'**',minute:'**',second:'**'}}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true} afterTimeLabel={{day:'XX',hour:'XX',minute:'XX',second:'XX'}}/>"}<br/>
          </Code>        */}
          <Code importFromList={this.importFromList} >
            {'componentDidMount() {'}<br/>
            &nbsp;&nbsp;{'//1초에 한번씩 이벤트가 발생시켜 컴포넌트들에게 전달합니다.'}<br/>
            &nbsp;&nbsp;IconCountDownController.on()<br/>
            &nbsp;&nbsp;{'//controller가 동작여부를 반환합니다.'}<br/>
            &nbsp;&nbsp;{'//IconCountDownController.getIsOn()'}<br/>
            &nbsp;&nbsp;{'//이벤트발생을 종료시킵니다.'}<br/>
            &nbsp;&nbsp;{'//IconCountDownController.off()'}<br/>
            {'}'}<br/><br/>
            
            {"<IconCountDown scheduleStartDate={1523250124972} scheduleEndDate={1573250124972} isActive={true}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1523250124972} scheduleEndDate={1573250124972} isActive={false}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true} beforeTimeLabel={{day:'**',hour:'**',minute:'**',second:'**'}}/>"}<br/>
            {"<IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true} afterTimeLabel={{day:'XX',hour:'XX',minute:'XX',second:'XX'}}/>"}<br/>
          </Code>  
          <Divider />     
          <IconCountDown scheduleStartDate={1523250124972} scheduleEndDate={1573250124972} isActive={true}/>
          <IconCountDown scheduleStartDate={1523250124972} scheduleEndDate={1573250124972} isActive={false}/>
          <IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true} />
          <IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={true} 
            beforeTimeLabel={{
              day:'**',
              hour:'**',
              minute:'**',
              second:'**'
            }}
          />
          <IconCountDown scheduleStartDate={1573250124972} scheduleEndDate={1623250124972} isActive={false} 
            afterTimeLabel={{
              day:'XX',
              hour:'XX',
              minute:'XX',
              second:'XX'
            }}
          />
        </ComponentTemplete>

        

        <PropertyTable propertyTableList={this.propertyTableList}/>
      </MainTemplete>
    );
  }
}

export default IconCountDownContainer;