import Preferences from '../../Preferences';
import {Switch , Route} from 'react-router-dom';
import {Switch as ChromeExtensionSwitch, Route as ChromeExtensionRoute} from '../routerconnection/RouterSwitchForChromeExtension'

export default class RouterUtil {
  static getSwitchRoute=()=>{
    if(Preferences.isChromeApp === true){
      return {
        Switch:ChromeExtensionSwitch,
        Route:ChromeExtensionRoute
      }
    } 
    else {
      return {Switch , Route}
    }
  }
}