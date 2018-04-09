import {LISTENER_KEY, EVENT_TYPE} from './Constants';

export default class TimerController {
  static isOn = false
  static interval = 1000
  static timer = null

  static getIsOn(){
    return this.isOn
  }

  static on(){
    this.isOn = true
    if(this.timer){
      clearInterval(this.timer)
      this.timer = null
    }

    this.timer = setInterval(()=>{
      let event = new window.CustomEvent(LISTENER_KEY.INTERVAL_TIMER, {
        detail:{
          type:EVENT_TYPE.countDown,
          payload:{}
        }
      })
      window.dispatchEvent(event);
    }, this.interval)

  }

  static off(){
    this.isOn = false
    if(this.timer){
      clearInterval(this.timer)
      this.timer = null
    }
  }
}