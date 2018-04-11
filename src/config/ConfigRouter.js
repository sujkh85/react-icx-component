import React from 'react';
import PageNotFound from '../error/PageNotFound';
import PageNotConnect from '../error/PageNotConnect';
import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
import IntroContainer from '../intro/IntroContainer';
import EtcContainer from '../etc/EtcContainer';
import ButtonContainer from '../buttons/ButtonContainer';
import ChartContainer from '../chart/ChartContainer';

const ConfigRouter = (props) => {
	return(
		<QuerySwitch {...props} queryname="pagename">
			<QueryRoute component={IntroContainer} />
      <QueryRoute path="intro" component={IntroContainer} />
			<QueryRoute path="etc" component={EtcContainer} />
			<QueryRoute path="chart" component={ChartContainer} />

			<QueryRoute path="/notconnect" component={PageNotConnect}/>
			<QueryRoute path="button" component={ButtonContainer} />
			<QueryRoute nomatch component={PageNotFound}/>
		</QuerySwitch>
	)
}

export default ConfigRouter;
