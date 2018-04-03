import {EventName, EventType} from './EventName';

export default class SpinController {

  static requestWeb3(){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.request}
    });
    window.dispatchEvent(event);
  }

  static ErrorWeb3(err){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.responseError}
    });
    window.dispatchEvent(event);
    return Promise.reject(err);
  }

  static responseWeb3(){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.response}
    });
    window.dispatchEvent(event);
  }
  
  static request(req){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.request}
    });
    window.dispatchEvent(event);
    return req;
  }

  static requestShowSpin(req){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.requestShowSpin}
    });
    window.dispatchEvent(event);
    return req;
  }

  static requestError(err){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.requestError}
    });
    window.dispatchEvent(event);
    return Promise.reject(err);
  }
  static response(res){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.response}
    });
    window.dispatchEvent(event);
    return res;
  }
  static responseError(err){
    let event = new CustomEvent(EventName.api_call, {
      detail: {type:EventType.responseError}
    });
    window.dispatchEvent(event);
    return Promise.reject(err);
  }
  
  static showSpin(timer = 2000){
    let event = new CustomEvent(EventName.show_spin, {
      detail: {
        type:EventType.showSpin,
        timer: timer
      }
    });
    window.dispatchEvent(event);
  }

  static hideSpin(){
    let event = new CustomEvent(EventName.hide_spin, {
      detail: {type:EventType.hideSpin}
    });
    window.dispatchEvent(event);
  }
  static clearSpin(){
    let event = new CustomEvent(EventName.clear_spin, {
      detail: {type:EventType.clearSpin}
    });
    window.dispatchEvent(event);
  }

}
