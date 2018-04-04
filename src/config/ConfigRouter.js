import React from 'react';
import PageNotFound from '../error/PageNotFound';
import PageNotConnect from '../error/PageNotConnect';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
import IntroContainer from '../intro/IntroContainer';
import EtcContainer from '../etc/EtcContainer';

const ConfigRouter = (props) => {
	return(
		<QuerySwitch {...props} queryname="pagename">
			<QueryRoute component={IntroContainer} />
      <QueryRoute path="intro" component={IntroContainer} />
			<QueryRoute path="etc" component={EtcContainer} />
			<QueryRoute path="/notconnect" component={PageNotConnect}/>
			<QueryRoute nomatch component={PageNotFound}/>
		</QuerySwitch>
	)
}

export default ConfigRouter;
