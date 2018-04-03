import React from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
// import createHistory from 'history/createHashHistory';
import RouterConnection from './library/routerconnection/RouterConnectionForWeb';
import ConfigStore from './config/ConfigStore';
import PageContainer from './PageContainer';
//timezone
import moment from 'moment';
moment.locale('ko');

export const store = ConfigStore()
const history = createHistory();

class App extends React.PureComponent {
  render() {
    return ( 
      <Provider store={store}>
        <RouterConnection
          history={history}
          basename={process.env.PUBLIC_URL}
          component={PageContainer}
        />
      </Provider>
    );
  }
}

export default App;
