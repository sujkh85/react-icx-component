import React from 'react';
// import {Switch , Route} from 'react-router-dom';
import PageNotFound from '../error/PageNotFound';
import PageNotConnect from '../error/PageNotConnect';
// import {Switch , Route} from 'react-router-dom';
import {QuerySwitch, QueryRoute, Redirect} from '../library/queryrouter/';
import MainContainer from '../main/MainContainer';
import EtcContainer from '../etc/EtcContainer';

const ConfigRouter = (props) => {
	return(
		<QuerySwitch {...props} queryname="pagename">
			<QueryRoute component={MainContainer} />
      <QueryRoute path="main" component={MainContainer} />
			<QueryRoute path="etc" component={EtcContainer} />
			<QueryRoute path="/notconnect" component={PageNotConnect}/>
			<QueryRoute nomatch component={PageNotFound}/>
		</QuerySwitch>
	)
}

export default ConfigRouter;
