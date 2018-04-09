import React, { Component } from 'react';
import moment from 'moment';
import {LISTENER_KEY, EVENT_TYPE} from './Constants'

class IconCountDown extends Component {
  //내부 타입 before(기간전) in(기간중) after(기간후)를 갖습니다.
  constructor(props){
    super(props)
    const {scheduleStartDate, scheduleEndDate} = this.props
    this.countdownTimer = null
    this.state = {
      ...this.getBeforeTime(),
      scheduleStartDate:scheduleStartDate,
      scheduleEndDate:scheduleEndDate,
      dateType:this.getDateType({scheduleStartDate, scheduleEndDate})
    }
  }

  getDateType({scheduleStartDate,scheduleEndDate}){
    let startDate = scheduleStartDate
    let endDate = scheduleEndDate

    if(moment().isBetween(startDate, endDate) === true){
      return 'in'
    }
    else if(moment().isBefore(startDate) === true){
      return 'before'
    }
    else {
      return 'after'
    }
  }

  getBeforeTime=()=>{
    return {
      day:'--',
      hour:'--',
      minute:'--',
      second:'--'
    }
  }

  getAfterTime=()=>{
    return {
      day:'00',
      hour:'00',
      minute:'00',
      second:'00'
    }
  }

  calculation=()=>{
    const {scheduleStartDate, scheduleEndDate} = this.state
    const {contract} = this.props
    let dateType = this.getDateType({scheduleStartDate, scheduleEndDate})
    switch (dateType) {
      case 'before':
        if(contract.isActive === true){
          this.runBefore()
        }
        else if(contract.isActive === false){
          this.runFinish()
        }
        break;
      case 'in':
        if(contract.isActive === true){
          this.runIn()
        }
        else if(contract.isActive === false){
          this.runFinish()
        }
        break;
      case 'after':
        this.runAfter()
      break;  
      default:
        break;
    }
  }

  runBefore=()=>{
    const {dateType} = this.state
    if(dateType !== 'before'){
      this.setState({
        dateType:'before',
        ...this.getBeforeTime()
      })
    }
  }

  runIn=()=>{
    const {scheduleEndDate} = this.state
    let now = moment().format('x') * 1
    
    this.setState({
      dateType:'in',
      day:moment(scheduleEndDate*1).diff(now,'days'),
      hour:(moment(scheduleEndDate*1).diff(now,'hours')%24).toString().padStart(2, "0"),
      minute:(moment(scheduleEndDate*1).diff(now,'minutes')%60).toString().padStart(2, "0"),
      second:(moment(scheduleEndDate*1).diff(now,'seconds')%60).toString().padStart(2, "0"),
    })
  }

  runAfter=()=>{
    const {dateType} = this.state
    if(dateType !== 'after'){
      this.setState({
        dateType:'after',
        ...this.getAfterTime()
      })
    }
  }

  runFinish=()=>{
    const {dateType} = this.state
    if(dateType !== 'finished'){
      this.setState({
        dateType:'finished',
        ...this.getAfterTime()
      })
    }
  }
  
  onCountDown=()=>{
    this.calculation()
  }
  
  onListener=(e)=>{
    const {type} = e.detail;

    switch (type) {
      case EVENT_TYPE.countDown:
        this.onCountDown(e.detail.payload)
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    window.addEventListener(LISTENER_KEY.INTERVAL_TIMER, this.onListener, false);
  }

  componentWillUnmount() {
    window.removeEventListener(LISTENER_KEY.INTERVAL_TIMER,this.onListener, false);
  }
  
  render() {
    const {day, hour, minute, second} = this.state
    return (
      <div className="countdown">
        <div className="countdown-column">
          <span className="countdown-time">{day}</span>
          <span className="countdown-text">DAYS</span>
        </div>
        <div className="countdown-column">
          <span className="countdown-time">{hour}</span>
          <span className="countdown-text">HRS</span>
        </div>
        <div className="countdown-column">
          <span className="countdown-time">{minute}</span>
          <span className="countdown-text">MINS</span>
        </div>
        <div className="countdown-column">
          <span className="countdown-time">{second}</span>
          <span className="countdown-text">SECS</span>
        </div>
      </div>
    );
  }
}

export default IconCountDown;